# Dados e persistencia

## Tipos

- `prisma/schema.prisma` e a fonte de verdade para os dados persistidos. O tipo `Vaga` usado para resultados do banco deve ser o tipo gerado pelo Prisma Client; nao manter uma segunda definicao manual em `lib/tipos.ts`.
- Campos preenchidos pelo banco, como `criadaEm DateTime @default(now())`, sao obrigatorios no tipo de leitura. Eles ficam fora do input de criacao quando o banco fornece o valor; usar os tipos de entrada gerados pelo Prisma, nao tornar o campo opcional no model.
- Um campo so recebe `?` no Prisma quando pode realmente ser nulo no banco. Opcionalidade de criacao e nulabilidade sao coisas diferentes.

## JSON publicado

- O JSON publicado e um contrato separado do model do banco. Seu formato deve ter um tipo proprio (por exemplo, `VagaPublicada`), sem declarar o Prisma como origem ou ampliar o tipo com campos opcionais para esconder divergencias.
- Campos existentes apenas no JSON continuam no contrato de publicacao e nao entram no banco sem decisao explicita. Campos exclusivos do banco nao sao adicionados ao JSON por acidente; quando precisarem atravessar essa fronteira, converter por um adaptador explicito. Datas serializadas no JSON usam string ISO; no Prisma, `criadaEm` e `Date`.

## Responsabilidades e migrations

- Quando o mesmo `slug` existir no JSON publicado e no banco, o banco vence. Uma edicao feita pelo site precisa continuar visivel sem alterar a publicacao original; o JSON permanece como fallback para empresas sem registro no banco.

- A Frente 1, como responsavel pela integracao, e a unica autora de `lib/prisma.ts` e da migration inicial. O client e compartilhado por toda a aplicacao; nao criar clients por frente.
- Cada frente acrescenta somente seu proprio model ao `prisma/schema.prisma`, em commit pequeno e proprio. Antes de gerar uma migration com `prisma migrate dev`, fazer `git pull` para usar o schema e as migrations mais recentes; incluir a migration gerada junto da mudanca do model.
- A migration inicial estabelece a base compartilhada. Migrations posteriores devem ser geradas em sequencia sobre o estado atualizado do repositorio, nunca em paralelo sobre copias desatualizadas do schema.