using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using SP_Medical_group.WebApi.Domains;
using SP_Medical_group.WebApi.Interfaces;
using SP_Medical_group.WebApi.Repositores;
using SP_Medical_group.WebApi.ViewModel;

namespace SP_Medical_group.WebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private IUsuarioRepository UsuarioRepository { get; set; }

        public LoginController()
        {
            UsuarioRepository = new UsuarioRepository();
        }

        [HttpPost]
        public IActionResult Post(LoginViewModel login)
        {
            Usuarios usuario = UsuarioRepository.BuscarPorEmailSenha(login.Email, login.Senha);

            try
            {
                if(usuario == null)
                {
                    return NotFound(new
                    {
                        mensage = "Usuaro não foi encontrado"
                    });
                }

                var Claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Email, usuario.Email),
                    new Claim(JwtRegisteredClaimNames.Jti, usuario.Id.ToString()),
                    new Claim(ClaimTypes.Role, usuario.IdTipoUsuarioNavigation.Nome)
                };

                var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("SpMedicalGroup-chave-autenticacao"));

                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken(
                    issuer: "SpMedicalGroup.WebApi",
                    audience: "SpMedicalGroup.WebApi",
                    claims: Claims,
                    expires: DateTime.Now.AddMinutes(30)
                    ,signingCredentials: creds
                    );

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token)
                });

            }
            catch(Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}