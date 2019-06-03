using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SP_Medical_group.WebApi.Domains
{
    public class LocalizacaoDomain
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("descricao")]
        public string Descricao { get; set; }

        [BsonElement("latitude")]
        [BsonRequired]
        public string Latitude { get; set; }

        [BsonElement("longitude")]
        [BsonRequired]
        public string Longitude { get; set; }

        [BsonElement("especialidade")]
        [BsonRequired]
        public string Especialidade { get; set; }

        [BsonElement("DtNascimento")]
        public string DtNascimento { get; set; }
    }
}
