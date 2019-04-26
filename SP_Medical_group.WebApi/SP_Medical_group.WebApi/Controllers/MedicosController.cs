using System;
using System.Collections.Generic;
using System.Linq;
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
    public class MedicosController : ControllerBase
    {
        private IMedicoRepository MedicoRepository { get; set; }

        public MedicosController()
        {
            MedicoRepository = new MedicoRepository();
        }

        [Authorize(Roles = "Administrador")]
        [HttpPost]
        public IActionResult Post(Medicos medicos)
        {
            try
            {
                MedicoRepository.Cadastrar(medicos);
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
                return Ok(MedicoRepository.BuscarMedicos());
            }
            catch(Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}