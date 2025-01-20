/*
  Warnings:

  - You are about to drop the column `costPerUnit` on the `FoodProduct` table. All the data in the column will be lost.
  - Added the required column `calories` to the `FoodProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cost` to the `FoodProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `food_group` to the `FoodProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `FoodProduct` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_FoodProduct" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "brand" TEXT NOT NULL DEFAULT '',
    "calories" TEXT NOT NULL,
    "carbohydrate" TEXT NOT NULL,
    "cost" TEXT NOT NULL,
    "fat" TEXT NOT NULL,
    "food_group" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "protein" TEXT NOT NULL,
    "quantity" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "slug" TEXT NOT NULL DEFAULT '',
    "unit" TEXT NOT NULL
);
INSERT INTO "new_FoodProduct" ("carbohydrate", "fat", "id", "name", "protein", "salt", "slug", "unit") SELECT "carbohydrate", "fat", "id", "name", "protein", "salt", "slug", "unit" FROM "FoodProduct";
DROP TABLE "FoodProduct";
ALTER TABLE "new_FoodProduct" RENAME TO "FoodProduct";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
