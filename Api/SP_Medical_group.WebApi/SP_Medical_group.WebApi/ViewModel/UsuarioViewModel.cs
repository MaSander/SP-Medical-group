﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SP_Medical_group.WebApi.ViewModel
{
    public class UsuarioViewModel
    {
        public int Id { get; set; }

        public string Email { get; set; }

        public string Nome { get; set; }

        public int TipoUsuario { get; set; }
    }
}
