using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SP_Medical_group.WebApi.Domains;
using SP_Medical_group.WebApi.Interfaces;
using SP_Medical_group.WebApi.Repositores;

namespace SP_Medical_group.WebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class ConsultasController : ControllerBase
    {
        private IConsultaRepository ConsultaRepository { get; set; }

        public ConsultasController()
        {
            ConsultaRepository = new ConsultaRepository();
        }

        [Authorize(Roles = "Administrador")]
        [HttpPost]
        public IActionResult Post(Consulta consulta)
        {
            try
            {
                ConsultaRepository.Cadastrar(consulta);
                return Ok();
            }catch(Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [Authorize(Roles = "Administrador,Médico")]
        [HttpPut]
        public IActionResult Put(Consulta consulta)
        {
            try
            {

                Consulta consultaProcurada = ConsultaRepository.BuscarPorId(consulta.Id);

                
                if (consultaProcurada == null)
                {
                    return NotFound();
                }

                consultaProcurada.Descricao = consulta.Descricao;

                if(consulta.IdTipoSituacao != null)
                {
                    consultaProcurada.IdTipoSituacao = consulta.IdTipoSituacao;
                }

                if(consulta.DataHota != null)
                {
                    consultaProcurada.DataHota = consulta.DataHota;
                }


                ConsultaRepository.Atualizar(consultaProcurada);
                return Ok();
            }
            catch(Exception ex)
            {
                return BadRequest(ex);
            }
        }

        //[Authorize(Roles = "Paciente")]
        //[Route("Paciente")]
        //[HttpGet("Paciente")]
        //public IActionResult Paciente()
        //{
        //    try
        //    {
        //        int usuarioId = Convert.ToInt32(HttpContext.User.Claims.First(x => x.Type == JwtRegisteredClaimNames.Jti).Value);

        //        return Ok(ConsultaRepository.ConsultasPacientes(usuarioId));
        //    }
        //    catch (Exception ex)
        //    {
        //        return BadRequest(ex);

        //    }
        //}

        //[Authorize(Roles = "Médico")]
        //[Route("Medico")]
        //[HttpGet("Medico")]
        //public IActionResult Medico()
        //{
        //    try
        //    {
        //        int usuarioId = Convert.ToInt32(HttpContext.User.Claims.First(x => x.Type == JwtRegisteredClaimNames.Jti).Value);
        //        return Ok(ConsultaRepository.ConsultasMedicos(usuarioId));
        //    }
        //    catch (Exception ex)
        //    {
        //        return BadRequest(ex);
        //    }
        //}

        //[Authorize(Roles = "Administrador")]
        //[Route("Administrador")]
        //[HttpGet]
        //public IActionResult AdministradorGet()
        //{
//            try
//            {
//                return Ok(ConsultaRepository.Consultas());
//    }
//            catch (Exception ex)
//            {
//                return BadRequest(ex);
//}
//}

[Authorize]
        //[Route("Usuario")]
        [HttpGet]
        public IActionResult Get()
        {
            string UTipo = HttpContext.User.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Role).Value;

            if (UTipo == "Médico")
            {
                try
                {
                    int usuarioId = Convert.ToInt32(HttpContext.User.Claims.First(x => x.Type == JwtRegisteredClaimNames.Jti).Value);
                    return Ok(ConsultaRepository.ConsultasMedicos(usuarioId));
                }
                catch (Exception ex)
                {
                    return BadRequest(ex);
                }
            }
            else if (UTipo == "Paciente")
            {
                try
                {
                    int usuarioId = Convert.ToInt32(HttpContext.User.Claims.First(x => x.Type == JwtRegisteredClaimNames.Jti).Value);
                    return Ok(ConsultaRepository.ConsultasPacientes(usuarioId));
                }
                catch (Exception ex)
                {
                    return BadRequest(ex);
                }
            }else if (UTipo == "Administrador")
            {
                try
                {
                    return Ok(ConsultaRepository.Consultas());
                }
                catch (Exception ex)
                {
                    return BadRequest(ex);
                }
            }

            return BadRequest();
        }

    }
}