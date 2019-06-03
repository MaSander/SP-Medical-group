using SP_Medical_group.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SP_Medical_group.WebApi.Interfaces
{
    public interface ILocalizacaoRepository
    {
        void Cadastrar(LocalizacaoDomain localizacao);

        List<LocalizacaoDomain> ListarLocais();
    }
}
