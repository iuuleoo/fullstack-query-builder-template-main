import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("courses").insert([
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "Git" },
    { name: "Banco de Dados" },
    { name: "Node.js" },
    { name: "React.js" },
    { name: "Vue.js" },
    { name: "Angular" },
    { name: "Nest.js" },
  ]);
}
