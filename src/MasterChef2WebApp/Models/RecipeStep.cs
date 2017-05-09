using System;
using System.Collections.Generic;
using Newtonsoft.Json;


namespace MasterChef2WebApp.Models
{
    public partial class RecipeStep : Entity
    {
        public RecipeStep()
        {
            RecipeItems = new HashSet<RecipeItem>();
        }

        //public Guid RecipeStepId { get; set; }
        //public Guid RecipeId { get; set; }
        public int StepNo { get; set; }
        public string Instructions { get; set; }

        public virtual ICollection<RecipeItem> RecipeItems { get; set; }
        [JsonIgnore]
        public virtual Recipe Recipe { get; set; }
    }
}
