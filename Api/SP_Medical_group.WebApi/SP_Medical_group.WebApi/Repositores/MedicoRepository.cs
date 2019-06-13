using Microsoft.EntityFrameworkCore;
using SP_Medical_group.WebApi.Domains;
using SP_Medical_group.WebApi.Interfaces;
using SP_Medical_group.WebApi.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SP_Medical_group.WebApi.Repositores
{
    public class MedicoRepository : IMedicoRepository
    {
        public IEnumerable<MedicoViewModel> BuscarMedicos()
        {
            using(SpMedGroupContext ctx = new SpMedGroupContext())
            {
                var lista = ctx.Medicos.Include(x => x.IdEspecialidadeNavigation)
                    .Include(x => x.IdUsuarioNavigation).ToList();

                return (from ev in lista
                        select new MedicoViewModel()
                        {
                            Id = ev.Id
                            ,
                            Nome = ev.IdUsuarioNavigation.Nome
                            ,
                            Especialidade = ev.IdEspecialidadeNavigation.Nome
                            ,
                            Crm = ev.Crm
                            ,
                            Telefone = ev.Telefone
                        });
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
