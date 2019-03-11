using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SP_Medical_group.WebApi.ViewModel
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "Informe o Email")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Informe a Senha"),
        StringLength(150, MinimumLength = 3, ErrorMessage = "A senha deve ter entre 3 e 150 caracteres")]
        public string Senha { get; set; }
    }
}
