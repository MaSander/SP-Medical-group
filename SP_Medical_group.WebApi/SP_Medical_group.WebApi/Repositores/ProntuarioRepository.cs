using SP_Medical_group.WebApi.Domains;
using SP_Medical_group.WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SP_Medical_group.WebApi.Repositores
{
    public class ProntuarioRepository : IProntuarioRepository
    {
        public List<Prontuarios> BuscarProntuarios()
        {
            using (SpMedGroupContext ctx = new SpMedGroupContext())
            {
                return ctx.Prontuarios.ToList();
            }
        }

        public void Cadastrar(Prontuarios prontuario)
        {
            using (SpMedGroupContext ctx = new SpMedGroupContext())
            {
                ctx.Prontuarios.Add(prontuario);
            }
        }
    }
}
