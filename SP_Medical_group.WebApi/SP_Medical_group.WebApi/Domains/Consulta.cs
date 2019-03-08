using System;
using System.Collections.Generic;

namespace SP_Medical_group.WebApi.Domains
{
    public partial class Consulta
    {
        public int Id { get; set; }
        public DateTime DataHota { get; set; }
        public int? IdProntuario { get; set; }
        public int? IdMedico { get; set; }
        public string Descricao { get; set; }
        public int IdTipoSituacao { get; set; }

        public Medicos IdMedicoNavigation { get; set; }
        public Prontuarios IdProntuarioNavigation { get; set; }
        public TipoSituacao IdTipoSituacaoNavigation { get; set; }
    }
}
