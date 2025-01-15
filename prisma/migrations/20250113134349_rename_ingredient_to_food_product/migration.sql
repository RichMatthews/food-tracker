/*
  Warnings:

  - You are about to drop the `Ingredient` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MealIngredient` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_MealIngredients` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Ingredient";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "MealIngredient";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_MealIngredients";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "FoodProduct" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL DEFAULT '',
    "name" TEXT NOT NULL,
    "fat" DECIMAL NOT NULL,
    "carbohydrate" DECIMAL NOT NULL,
    "protein" DECIMAL NOT NULL,
    "salt" DECIMAL NOT NULL,
    "costPerUnit" DECIMAL NOT NULL,
    "unit" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "MealFoodProduct" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mealId" INTEGER NOT NULL,
    "foodProductId" INTEGER NOT NULL,
    "quantity" DECIMAL NOT NULL,
    CONSTRAINT "MealFoodProduct_mealId_fkey" FOREIGN KEY ("mealId") REFERENCES "Meal" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "MealFoodProduct_foodProductId_fkey" FOREIGN KEY ("foodProductId") REFERENCES "FoodProduct" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_FoodProducts" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_FoodProducts_A_fkey" FOREIGN KEY ("A") REFERENCES "FoodProduct" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_FoodProducts_B_fkey" FOREIGN KEY ("B") REFERENCES "Meal" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_FoodProducts_AB_unique" ON "_FoodProducts"("A", "B");

-- CreateIndex
CREATE INDEX "_FoodProducts_B_index" ON "_FoodProducts"("B");
