using Microsoft.EntityFrameworkCore;
using SP_Medical_group.WebApi.Domains;
using SP_Medical_group.WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SP_Medical_group.WebApi.Repositores
{
    public class MedicoRepository : IMedicoRepository
    {
        public List<Medicos> BuscarMedicos()
        {
            using(SpMedGroupContext ctx = new SpMedGroupContext())
            {
                return ctx.Medicos.Include(x => x.IdEspecialidadeNavigation).ToList();
            }
        }

        public void Cadastrar(Medicos medico)
        {
            using (SpMedGroupContext ctx = new SpMedGroupContext())
            {
                ctx.Medicos.Add(medico);
                ctx.SaveChanges();
            }
        }
    }
}
