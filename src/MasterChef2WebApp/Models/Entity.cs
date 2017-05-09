using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MasterChef2WebApp.Models
{
    public class Entity
    {
        public virtual Guid Id { get; set; }
        
        public virtual Guid? ParentId { get; set; }
    }
}
