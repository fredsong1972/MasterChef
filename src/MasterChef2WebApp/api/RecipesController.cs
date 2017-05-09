using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MasterChef2WebApp.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MasterChef2WebApp.api
{
    [Route("api/[controller]")]
    public class RecipesController : Controller
    {
        Repository _repository = Repository.Instance;
        // GET: api/recipes
        [HttpGet]
        public IEnumerable<Recipe> Get()
        {
            return _repository.GetAllRecipes();
        }

        // GET api/recipes/5
        [HttpGet("{id}")]
        public IActionResult Get(Guid id)
        {
            var recipe = _repository.GetEntity<Recipe>(id);
            if (recipe != null)
                return new ObjectResult(recipe);
            else
                return new NotFoundResult();
        }

        // POST api/recipes
        [HttpPost]
        public IActionResult Post([FromBody]Recipe recipe)
        {
            if (recipe.Id == Guid.Empty)
            {
                recipe.Id = Guid.NewGuid();
                recipe.ModifyDate = DateTime.Now;
                return new ObjectResult(_repository.AddEntity<Recipe>(recipe));
            }
            else
            {
                var existingOne = _repository.GetEntity<Recipe>(recipe.Id);
                existingOne.Name = recipe.Name;
                existingOne.Comments = recipe.Comments;
                existingOne.ModifyDate = DateTime.Now;
                _repository.UpdateEntity<Recipe>(existingOne);
                return new ObjectResult(existingOne);
            }
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(Guid id, [FromBody]Recipe recipe)
        {
            var existingOne = _repository.GetEntity<Recipe>(recipe.Id);
            existingOne.Name = recipe.Name;
            existingOne.Comments = recipe.Comments;
            _repository.UpdateEntity<Recipe>(existingOne);
            return new ObjectResult(existingOne);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            _repository.DeleteEntity<Recipe>(id);
            return new StatusCodeResult(200);
        }

        //GET api/recipes/step/:id
        [HttpGet]
        [Route("step/{id}")]
        public IActionResult GetStep(Guid id)
        {
            var recipeStep = _repository.GetEntity<RecipeStep>(id);
            if (recipeStep != null)
                return new ObjectResult(recipeStep);
            else
                return new NotFoundResult();

        }

        //POST api/recipes/step
        [HttpPost]
        [Route("step")]
        public IActionResult UpdateStep([FromBody]RecipeStep recipeStep)
        {
            if (recipeStep.Id == Guid.Empty)
            {
                recipeStep.Id = Guid.NewGuid();
                return new ObjectResult(_repository.AddEntity<RecipeStep>(recipeStep));
            }
            else
            {
                var existingOne = _repository.GetEntity<RecipeStep>(recipeStep.Id);
                existingOne.StepNo = recipeStep.StepNo;
                existingOne.Instructions = recipeStep.Instructions;
                _repository.UpdateEntity<RecipeStep>(existingOne);
                return new ObjectResult(existingOne);
            }
        }

        //DELETE api/recipes/step/:id
        [HttpDelete]
        [Route("step/{id}")]
        public IActionResult DeleteStep(Guid id)
        {
            _repository.DeleteEntity<RecipeStep>(id);
            return new StatusCodeResult(200);
        }

        // GET api/recipes/item/:id
        [HttpGet]
        [Route("item/{id}")]
        public IActionResult GetItem(Guid id)
        {
            var recipeItem = _repository.GetEntity<RecipeItem>(id);
            if (recipeItem != null)
                return new ObjectResult(recipeItem);
            else
                return new NotFoundResult();

        }

        //POST api/recipes/item
        [HttpPost]
        [Route("item")]
        public IActionResult UpdateItem([FromBody]RecipeItem recipeItem)
        {
            if (recipeItem.Id == Guid.Empty)
            {
                recipeItem.Id = Guid.NewGuid();
                if (recipeItem.MeasurementUnit == null)
                    recipeItem.MeasurementUnit = "";
                return new ObjectResult(_repository.AddEntity<RecipeItem>(recipeItem));
            }
            else
            {
                var existingOne = _repository.GetEntity<RecipeItem>(recipeItem.Id);
                existingOne.Name = recipeItem.Name;
                existingOne.Quantity = recipeItem.Quantity;
                existingOne.MeasurementUnit = recipeItem.MeasurementUnit;
                _repository.UpdateEntity<RecipeItem>(existingOne);
                return new ObjectResult(existingOne);
            }
        }

        //DELETE api/recipes/item/:id
        [HttpDelete]
        [Route("item/{id}")]
        public IActionResult DeleteItem(Guid id)
        {
            _repository.DeleteEntity<RecipeItem>(id);
            return new StatusCodeResult(200);
        }
    }
}
