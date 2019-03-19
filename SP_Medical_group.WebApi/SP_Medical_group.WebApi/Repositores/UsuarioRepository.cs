using Microsoft.EntityFrameworkCore;
using SP_Medical_group.WebApi.Domains;
using SP_Medical_group.WebApi.Interfaces;
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

        List<Prontuarios> IUsuarioRepository.ListarMedicos()
        {
            using (SpMedGroupContext ctx = new SpMedGroupContext())
            {
                return ctx.Prontuarios.ToList();
            }
        }

        List<Medicos> IUsuarioRepository.ListarPacientes()
        {
            using (SpMedGroupContext ctx = new SpMedGroupContext())
            {
                return ctx.Medicos.ToList();
            }
        }
    }
}
