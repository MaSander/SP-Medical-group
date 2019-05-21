using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SP_Medical_group.WebApi.Domains
{
    public partial class Usuarios
    {
        public Usuarios()
        {
            Prontuarios = new HashSet<Prontuarios>();
        }

        public int Id { get; set; }

        [Required(ErrorMessage ="Informe o nome")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "Informe o email")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Informe a senha")]
        public string Senha { get; set; }
        public int IdTipoUsuario { get; set; }

        public TipoUsuario IdTipoUsuarioNavigation { get; set; }
        public Medicos Medicos { get; set; }
        public ICollection<Prontuarios> Prontuarios { get; set; }
    }
}
