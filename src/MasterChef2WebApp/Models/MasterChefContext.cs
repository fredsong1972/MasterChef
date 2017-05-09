using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace MasterChef2WebApp.Models
{
    public partial class MasterChefContext : DbContext
    {
        public virtual DbSet<RecipeItem> RecipeItems { get; set; }
        public virtual DbSet<RecipeStep> RecipeSteps { get; set; }
        public virtual DbSet<Recipe> Recipes { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            #warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
            optionsBuilder.UseSqlServer(@"Server=.\sqlexpress;Database=MasterChef;Trusted_Connection=True;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<RecipeItem>(entity =>
            {
                entity.HasKey(e => e.Id)
                    .HasName("PK_RecipeItems");

                entity.Property(e => e.Id).ValueGeneratedNever().HasColumnName("ItemId");
                entity.Property(e => e.ParentId).HasColumnName("RecipeStepId");
                entity.Property(e => e.MeasurementUnit)
                    .IsRequired()
                    .HasColumnType("varchar(20)");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnType("varchar(255)");

                entity.Property(e => e.Quantity).HasColumnType("decimal");

                entity.HasOne(d => d.RecipeStep)
                    .WithMany(p => p.RecipeItems)
                    .HasForeignKey(d=>d.ParentId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_RecipeItems_RecipeSteps");
            });

            modelBuilder.Entity<RecipeStep>(entity =>
            {
                entity.HasKey(e => e.Id)
                    .HasName("PK_RecipeSteps");

                entity.Property(e => e.Id).ValueGeneratedNever().HasColumnName("RecipeStepId");
                entity.Property(e => e.ParentId).HasColumnName("RecipeId");
                entity.Property(e => e.Instructions).HasColumnType("text");

                entity.HasOne(d => d.Recipe)
                    .WithMany(p => p.RecipeSteps)
                    .HasForeignKey(d=>d.ParentId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_RecipeSteps_Recipes");
            });

            modelBuilder.Entity<Recipe>(entity =>
            {
                entity.HasKey(e => e.Id)
                    .HasName("PK_Recipes");
                entity.Ignore(e => e.ParentId);
                entity.Property(e => e.Id).ValueGeneratedNever().HasColumnName("RecipeId");

                entity.Property(e => e.Comments).HasColumnType("text");

                entity.Property(e => e.ModifyDate).HasColumnType("date");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnType("varchar(255)");
            });
        }
    }
}