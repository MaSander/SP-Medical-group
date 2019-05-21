using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SP_Medical_group.WebApi.ViewModel
{
    public class ConsultaViewModel
    {
        public int IdConsulta { get; set; }

        public string Descricao { get; set; }

        public DateTime DataConsulta { get; set; }

        public string statusConsulta { get; set; }

        public DateTime DtNascimentoPaciente { get; set; }

        public string NomePaciente { get; set; }

        public string NomeMedico { get; set; }

        public string Especialidade { get; set; }
    }
}
