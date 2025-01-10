-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Ingredient" (
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
INSERT INTO "new_Ingredient" ("carbohydrate", "costPerUnit", "fat", "id", "name", "protein", "salt", "unit") SELECT "carbohydrate", "costPerUnit", "fat", "id", "name", "protein", "salt", "unit" FROM "Ingredient";
DROP TABLE "Ingredient";
ALTER TABLE "new_Ingredient" RENAME TO "Ingredient";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
