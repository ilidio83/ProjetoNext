-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Vaga" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "empresaSlug" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "senioridade" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "aceitaIniciante" BOOLEAN NOT NULL DEFAULT false,
    "arquivada" BOOLEAN NOT NULL DEFAULT false,
    "descricao" TEXT NOT NULL,
    "criadaEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Vaga_empresaSlug_fkey" FOREIGN KEY ("empresaSlug") REFERENCES "Empresa" ("slug") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Vaga" ("aceitaIniciante", "area", "criadaEm", "descricao", "empresaSlug", "id", "local", "senioridade", "titulo") SELECT "aceitaIniciante", "area", "criadaEm", "descricao", "empresaSlug", "id", "local", "senioridade", "titulo" FROM "Vaga";
DROP TABLE "Vaga";
ALTER TABLE "new_Vaga" RENAME TO "Vaga";
CREATE INDEX "Vaga_empresaSlug_idx" ON "Vaga"("empresaSlug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
