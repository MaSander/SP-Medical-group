using SP_Medical_group.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SP_Medical_group.WebApi.Interfaces
{
    public interface IUsuarioRepository
    {
        void Cadastrar(Usuarios usuario);

        Usuarios BuscarPorEmailSenha(string email, string senha);

        List<Medicos> ListarPacientes();

        List<Prontuarios> ListarMedicos();
    }
}
