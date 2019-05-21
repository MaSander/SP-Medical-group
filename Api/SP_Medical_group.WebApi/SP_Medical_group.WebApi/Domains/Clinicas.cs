using System;
using System.Collections.Generic;

namespace SP_Medical_group.WebApi.Domains
{
    public partial class Clinicas
    {
        public Clinicas()
        {
            Medicos = new HashSet<Medicos>();
        }

        public int Id { get; set; }
        public string NomeFantasia { get; set; }
        public string Endereco { get; set; }
        public string HoraFuncionamento { get; set; }
        public string Cnpj { get; set; }
        public string RazaoSocial { get; set; }

        public ICollection<Medicos> Medicos { get; set; }
    }
}
