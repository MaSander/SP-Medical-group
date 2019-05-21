using SP_Medical_group.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SP_Medical_group.WebApi.Interfaces
{
    public interface IClinicaRepository
    {
        void Cadastrar(Clinicas clinica);

        void Atualizar(Clinicas clinicas);

        Clinicas BuscarPorId(int id);

        List<Clinicas> BuscarClinica();
    }
}
