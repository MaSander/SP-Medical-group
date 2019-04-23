using Microsoft.EntityFrameworkCore;
using SP_Medical_group.WebApi.Domains;
using SP_Medical_group.WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SP_Medical_group.WebApi.Repositores
{
    public class ConsultaRepository : IConsultaRepository
    {
        public void Cadastrar(Consulta consulta)
        {
            using(SpMedGroupContext ctx = new SpMedGroupContext())
            {
                ctx.Consulta.Add(consulta);
                ctx.SaveChanges();
            }
        }

        public void Atualizar(Consulta consulta)
        {
            using(SpMedGroupContext ctx = new SpMedGroupContext())
            {
                ctx.Consulta.Update(consulta);
                ctx.SaveChanges();
            }
        }

        public Consulta BuscarPorId(int id)
        {
            using(SpMedGroupContext ctx = new SpMedGroupContext())
            {
                return ctx.Consulta.Find(id);
            }
        }

        public List<Consulta> ConsultasPacientes(int usuarioId)
        {
            Prontuarios prontuario;

            using (SpMedGroupContext ctx = new SpMedGroupContext())
            {
                prontuario = ctx.Prontuarios.FirstOrDefault(x => x.IdUsuario == usuarioId);
            }

            using (SpMedGroupContext ctx = new SpMedGroupContext())
            {
                return ctx.Consulta        .Include(x => x.IdTipoSituacaoNavigation)
                                           .Include(x => x.IdProntuarioNavigation)
                                           .Include(x => x.IdProntuarioNavigation.IdUsuarioNavigation)
                                           .Include(x => x.IdMedicoNavigation)
                                           .Include(x => x.IdMedicoNavigation.IdUsuarioNavigation)
                                           .Include(x => x.IdMedicoNavigation.IdEspecialidadeNavigation)
                                           .Where(x => x.IdProntuario == prontuario.Id).ToList();
            }
        }

        public List<Consulta> ConsultasMedicos(int usuarioId)
        {
            Medicos medico;

            using (SpMedGroupContext ctx = new SpMedGroupContext())
            {
                medico = ctx.Medicos.FirstOrDefault(x => x.IdUsuario == usuarioId);
            }
            
            using (SpMedGroupContext ctx = new SpMedGroupContext())
            {
                return ctx.Consulta.Include(x => x.IdTipoSituacaoNavigation)
                                           .Include(x => x.IdProntuarioNavigation)
                                           .Include(x => x.IdProntuarioNavigation.IdUsuarioNavigation)
                                           .Include(x => x.IdMedicoNavigation)
                                           .Include(x => x.IdMedicoNavigation.IdUsuarioNavigation)
                                           .Include(x => x.IdMedicoNavigation.IdEspecialidadeNavigation)
                                           .Where(x => x.IdMedico == medico.Id).ToList();
            }
        }

        public List<Consulta> Consultas()
        {
            using (SpMedGroupContext ctx = new SpMedGroupContext())
            {
                return ctx.Consulta.Include(x => x.IdTipoSituacaoNavigation)
                                           .Include(x => x.IdProntuarioNavigation)
                                           .Include(x => x.IdProntuarioNavigation.IdUsuarioNavigation)
                                           .Include(x => x.IdMedicoNavigation)
                                           .Include(x => x.IdMedicoNavigation.IdUsuarioNavigation)
                                           .Include(x => x.IdMedicoNavigation.IdEspecialidadeNavigation)
                                           .ToList();
            }
        }

    }
}
