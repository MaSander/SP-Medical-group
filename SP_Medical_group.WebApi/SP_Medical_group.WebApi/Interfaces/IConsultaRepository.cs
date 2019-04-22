using SP_Medical_group.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SP_Medical_group.WebApi.Interfaces
{
    public interface IConsultaRepository
    {
        void Cadastrar(Consulta consulta);

        void Atualizar(Consulta consulta);

        Consulta BuscarPorId(int id);

        List<Consulta> ConsultasPacientes(int usuarioId);

        List<Consulta> ConsultasMedicos(int usuarioId);

        List<Consulta> Consultas();
    }
}
