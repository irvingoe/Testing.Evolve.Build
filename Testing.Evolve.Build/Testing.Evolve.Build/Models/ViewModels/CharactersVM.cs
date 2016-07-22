using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Testing.Evolve.Build.Models.ViewModels
{
    public class CharactersVM
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int Role { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public byte[] Image { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? LastModifiedDate { get; set; }
        public bool? Deleted { get; set; }
    }
}