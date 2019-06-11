using SP_Medical_group.WebApi.Domains;
using SP_Medical_group.WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SP_Medical_group.WebApi.Repositores
{
    public class EspecialidadeRepository : IEspecialidadeRepository
    {
        public void Cadastrar(Especialidades especialidades)
        {
            using (SpMedGroupContext ctx = new SpMedGroupContext())
            {
                ctx.Especialidades.Add(especialidades);
                ctx.SaveChanges();
            }
        }

        public List<Especialidades> ListarEspecialidades()
        {
            using (SpMedGroupContext ctx = new SpMedGroupContext())
            {
                return ctx.Especialidades.ToList();
            }
}
    }
}
