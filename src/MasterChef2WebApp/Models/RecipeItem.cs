using System;
using Newtonsoft.Json;

namespace MasterChef2WebApp.Models
{
    public partial class RecipeItem : Entity
    {
        //public Guid ItemId { get; set; }
        //public Guid RecipeStepId { get; set; }
        public string Name { get; set; }
        public decimal Quantity { get; set; }
        public string MeasurementUnit { get; set; }
        [JsonIgnore]
        public virtual RecipeStep RecipeStep { get; set; }
    }
}
