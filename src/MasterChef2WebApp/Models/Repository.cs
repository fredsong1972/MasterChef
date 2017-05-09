using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace MasterChef2WebApp.Models
{
    public class Repository
    {
        private static readonly Repository _instance = new Repository();

        MasterChefContext _dbContext;
        private Repository()
        {
            _dbContext = new MasterChefContext();
        }

        public static Repository Instance
        {
            get
            {
                return _instance;
            }
        }

        public IList<Recipe> GetAllRecipes()
        {
            try
            {
                var recipes = _dbContext.Recipes.Include(x => x.RecipeSteps).ThenInclude(y => y.RecipeItems).OrderBy(x=>x.ModifyDate).ToList();
                recipes.ForEach(x => x.RecipeSteps = x.RecipeSteps.OrderBy(y => y.StepNo).ToList());
                return recipes;

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public T GetEntity<T>(Guid id) where T : Entity
        {
            try
            {
                return _dbContext.Find<T>(id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public T AddEntity<T>(T entity) where T : Entity
        {
            _dbContext.Add<T>(entity);
            _dbContext.SaveChanges();
            var result = GetEntity<T>(entity.Id);
            return result;
        }

        public void UpdateEntity<T>(T entity) where T : Entity
        {
            _dbContext.Update<T>(entity);
            _dbContext.SaveChanges();
        }

        public void DeleteEntity<T>(Guid id) where T : Entity
        {
            var entity = GetEntity<T>(id);
            _dbContext.Remove<T>(entity);
            _dbContext.SaveChanges();
        }
    }
}
