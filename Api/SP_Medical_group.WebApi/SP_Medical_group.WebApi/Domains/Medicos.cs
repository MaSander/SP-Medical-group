using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SP_Medical_group.WebApi.Domains
{
    public partial class Medicos
    {
        public Medicos()
        {
            Consulta = new HashSet<Consulta>();
        }

        public int Id { get; set; }
        public int? IdUsuario { get; set; }
        public int IdClinica { get; set; }

        [Required(ErrorMessage = "Informe a especialidade")]
        public int IdEspecialidade { get; set; }

        [Required(ErrorMessage = "Informe a crm do médico")]
        public string Crm { get; set; }
        public string Telefone { get; set; }

        public Clinicas IdClinicaNavigation { get; set; }
        public Especialidades IdEspecialidadeNavigation { get; set; }
        public Usuarios IdUsuarioNavigation { get; set; }
        public ICollection<Consulta> Consulta { get; set; }
    }
}
