using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SP_Medical_group.WebApi.Domains
{
    public partial class Prontuarios
    {
        public Prontuarios()
        {
            Consulta = new HashSet<Consulta>();
        }

        public int Id { get; set; }
        public int? IdUsuario { get; set; }
        public string Telefone { get; set; }
        public string Endereco { get; set; }

        [Required(ErrorMessage = "Informe a data de nascimento")]
        public DateTime DtNascimento { get; set; }
        public string Rg { get; set; }
        public string Cpf { get; set; }

        public Usuarios IdUsuarioNavigation { get; set; }
        public ICollection<Consulta> Consulta { get; set; }
    }
}
