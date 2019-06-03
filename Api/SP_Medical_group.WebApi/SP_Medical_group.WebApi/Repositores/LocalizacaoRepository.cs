using MongoDB.Driver;
using SP_Medical_group.WebApi.Domains;
using SP_Medical_group.WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SP_Medical_group.WebApi.Repositores
{
    public class LocalizacaoRepository : ILocalizacaoRepository
    {
        //private readonly IMongoCollection<LocalizacaoDomain> _localizacoes;
        private readonly IMongoCollection<LocalizacaoDomain> _localizacoes;

        public LocalizacaoRepository()
        {
            var client = new MongoClient("mongodb://localhost:27017");
            var database = client.GetDatabase("SpMedGrupLocal");
            _localizacoes = database.GetCollection<LocalizacaoDomain>("locais");
        }

        public void Cadastrar(LocalizacaoDomain localizacao)
        {
            _localizacoes.InsertOne(localizacao);
        }

        public List<LocalizacaoDomain> ListarLocais()
        {
            return _localizacoes.Find(_ => true).ToList();
        }
    }
}
