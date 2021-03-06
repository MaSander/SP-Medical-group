﻿using SP_Medical_group.WebApi.Domains;
using SP_Medical_group.WebApi.ViewModel;
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

        IEnumerable<ConsultaViewModel> ConsultasPacientes(int usuarioId);

        IEnumerable<ConsultaViewModel> ConsultasMedicos(int usuarioId);

        IEnumerable<ConsultaViewModel> Consultas();
    }
}
