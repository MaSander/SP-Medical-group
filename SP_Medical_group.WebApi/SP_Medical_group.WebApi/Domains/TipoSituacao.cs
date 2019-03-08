using System;
using System.Collections.Generic;

namespace SP_Medical_group.WebApi.Domains
{
    public partial class TipoSituacao
    {
        public TipoSituacao()
        {
            Consulta = new HashSet<Consulta>();
        }

        public int Id { get; set; }
        public string Nome { get; set; }

        public ICollection<Consulta> Consulta { get; set; }
    }
}
