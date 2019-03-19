using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SendGrid;
using SendGrid.Helpers.Mail;

namespace SP_Medical_group.WebApi.Utils
{
    public class EmailSendGrid
    {
        static public string Email { get; set; }
        static public string Nome { get; set; }

        //private static void Main()
        //{
        //    Execute().Wait();
        //}

        public void Incrementar(string Uemail, string Unome)
        {
            Email = Uemail;
            Nome = Unome;

            Execute().Wait();
        }

        static async Task Execute()
        {
            var apiKey = "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";
            var client = new SendGridClient(apiKey);
            var from = new EmailAddress("ma.sander11@gmail.com", "SpMedicalGroup");
            var subject = "Cadastro na SpMedGroup";
            var to = new EmailAddress(Email, Nome);
            var plainTextContent = "Seu cadastro na Sp Medical Group foi feita com sucesso!!";
            var htmlContent = "<strong></strong>";
            var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);
            var response = await client.SendEmailAsync(msg);
        }

        //public async Task EnviarEmail(string email, string nome)
        //{
        //    var apiKey = Environment.GetEnvironmentVariable("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");
        //    var client = new SendGridClient(apiKey);
        //    var from = new EmailAddress("ma.sander11@gmail.com", "SpMedicalGroup");
        //    var subject = "Cadastro na SpMedGroup";
        //    var to = new EmailAddress(email , nome);
        //    var plainTextContent = "Seu cadastro na Sp Medical Group foi feita com sucesso!!";
        //    var htmlContent = "<strong></strong>";
        //    var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);
        //    var response = await client.SendEmailAsync(msg);
        //}
    }
}