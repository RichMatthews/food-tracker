-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_FoodProduct" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL DEFAULT '',
    "name" TEXT NOT NULL,
    "fat" TEXT NOT NULL,
    "carbohydrate" TEXT NOT NULL,
    "protein" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "costPerUnit" TEXT NOT NULL,
    "unit" TEXT NOT NULL
);
INSERT INTO "new_FoodProduct" ("carbohydrate", "costPerUnit", "fat", "id", "name", "protein", "salt", "slug", "unit") SELECT "carbohydrate", "costPerUnit", "fat", "id", "name", "protein", "salt", "slug", "unit" FROM "FoodProduct";
DROP TABLE "FoodProduct";
ALTER TABLE "new_FoodProduct" RENAME TO "FoodProduct";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
