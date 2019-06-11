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
    public class UsuarioRepository : IUsuarioRepository 
    {
        public Usuarios BuscarPorEmailSenha(string email, string senha)
        {
            using (SpMedGroupContext ctx = new SpMedGroupContext())
            {
                return ctx.Usuarios.Include(x => x.IdTipoUsuarioNavigation).FirstOrDefault(u => u.Email == email && u.Senha == senha);
            }
        }

        public void Cadastrar(Usuarios usuario)
        {
            using (SpMedGroupContext ctx = new SpMedGroupContext())
            {
                ctx.Usuarios.Add(usuario);
                ctx.SaveChanges();
            }
        }

        public IEnumerable<UsuarioViewModel> ListarUsuarios()
        {
            using (SpMedGroupContext ctx = new SpMedGroupContext())
            {
                var lista = ctx.Usuarios.Where(x => x.IdTipoUsuario == 2 || x.IdTipoUsuario == 3).ToList();

                return (from ev in lista
                        select new UsuarioViewModel()
                        {
                            Id = ev.Id
                            ,
                            Email = ev.Email
                            ,
                            Nome = ev.Nome
                            ,
                            TipoUsuario = ev.IdTipoUsuario
                        });
            }

        }
    }
}
