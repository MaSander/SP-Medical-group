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

        public List<Consulta> ConsultasUsuarios(int usuarioId)
        {
            using(SpMedGroupContext ctx = new SpMedGroupContext())
            {
                return ctx.Consulta.ToList();
            }
        }

    }
}
