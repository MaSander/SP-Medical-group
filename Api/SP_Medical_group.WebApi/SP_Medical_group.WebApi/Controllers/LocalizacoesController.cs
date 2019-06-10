using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
    public class LocalizacoesController : ControllerBase
    {
        private ILocalizacaoRepository LocalizacaoRepository { get; set; }

        public LocalizacoesController()
        {
            LocalizacaoRepository = new LocalizacaoRepository();
        }
        
        [HttpPost]
        public IActionResult Cadasdrar(LocalizacaoDomain localizacao)
        {
            try
            {
                LocalizacaoRepository.Cadastrar(localizacao);
                return Ok();
            }
            catch(Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var listaLocais = LocalizacaoRepository.ListarLocais().ToList();
                return Ok(listaLocais);
            }
            catch(Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}