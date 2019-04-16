using SP_Medical_group.WebApi.Domains;
using SP_Medical_group.WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SP_Medical_group.WebApi.Repositores
{
    public class ClinicaRepository : IClinicaRepository
    {
        public void Atualizar(Clinicas clinicas)
        {
            using (SpMedGroupContext ctx = new SpMedGroupContext())
            {
                ctx.Clinicas.Update(clinicas);
                ctx.SaveChanges();
            }
        }

        public List<Clinicas> BuscarClinica()
        {
            using(SpMedGroupContext ctx = new SpMedGroupContext())
            {
                return ctx.Clinicas.ToList();
            }
        }

        public Clinicas BuscarPorId(int id)
        {
            using (SpMedGroupContext ctx = new SpMedGroupContext())
            {
                return ctx.Clinicas.Find(id);
            }
        }

        public void Cadastrar(Clinicas clinica)
        {
            using(SpMedGroupContext ctx = new SpMedGroupContext())
            {
                ctx.Clinicas.Add(clinica);
                ctx.SaveChanges();
            }
        }
    }
}
