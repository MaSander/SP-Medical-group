using SP_Medical_group.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SP_Medical_group.WebApi.Interfaces
{
    interface IProntuarioRepository
    {
        void Cadastrar(Prontuarios prontuario);

        List<Prontuarios> BuscarProntuarios();
    }
}
