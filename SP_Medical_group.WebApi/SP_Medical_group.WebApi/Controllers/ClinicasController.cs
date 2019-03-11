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
    public class ClinicasController : ControllerBase
    {
        private IClinicaRepository ClinicaRepository { get; set; }

        public ClinicasController()
        {
            ClinicaRepository = new ClinicaRepository();
        }

        [Authorize(Roles = "Adiministrador")]
        [HttpPost]
        public IActionResult Post(Clinicas clinica)
        {
            try
            {
                ClinicaRepository.Cadastrar(clinica);

                return Ok();

            }
            catch(Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [Authorize(Roles = "Adiministrador")]
        [HttpPut]
        public IActionResult Put(Clinicas clinica)
        {
            try
            {
                Clinicas clinicaProcurada = ClinicaRepository.BuscarPorId(clinica.Id);

                if (clinicaProcurada == null)
                {
                    return NotFound();
                }

                clinicaProcurada.Cnpj = clinica.Cnpj;

                if(clinica.Endereco != null)
                {
                    clinicaProcurada.Endereco = clinica.Endereco;
                }

                if(clinica.HoraFuncionamento != null)
                {
                    clinicaProcurada.HoraFuncionamento = clinica.HoraFuncionamento;
                }

                if(clinica.NomeFantasia != null)
                {
                    clinicaProcurada.NomeFantasia = clinica.NomeFantasia;
                }

                if(clinica.RazaoSocial != null)
                {
                    clinicaProcurada.RazaoSocial = clinica.RazaoSocial;
                }

                ClinicaRepository.Atualizar(clinicaProcurada);

                return Ok();

            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

    }
}