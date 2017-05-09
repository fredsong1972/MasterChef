using System;
using System.Collections.Generic;

namespace MasterChef2WebApp.Models
{
    public partial class Recipe : Entity
    {
        public Recipe()
        {
            RecipeSteps = new HashSet<RecipeStep>();
        }

        //public Guid RecipeId { get; set; }
        public string Name { get; set; }
        public DateTime ModifyDate { get; set; }
        public string Comments { get; set; }

        public virtual ICollection<RecipeStep> RecipeSteps { get; set; }
    }
}
