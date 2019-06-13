using SP_Medical_group.WebApi.Domains;
using SP_Medical_group.WebApi.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SP_Medical_group.WebApi.Interfaces
{
    public interface IMedicoRepository
    {
        void Cadastrar(Medicos medico);

        IEnumerable<MedicoViewModel> BuscarMedicos();
    }
}
