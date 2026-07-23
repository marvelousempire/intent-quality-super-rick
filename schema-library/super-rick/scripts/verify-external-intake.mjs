import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "../../..");
const schema = JSON.parse(readFileSync(resolve(root, "schema-library/super-rick/schemas/external-capability-assessment.schema.json")));
const example = JSON.parse(readFileSync(resolve(root, "schema-library/super-rick/examples/external-capability-assessment.example.json")));
const law = readFileSync(resolve(root, "standards/universal-external-intake.md"), "utf8");
const dispositions = schema.properties.disposition.enum;
for (const key of schema.required) if (!(key in example)) throw new Error(`example missing ${key}`);
for (const value of dispositions) if (!law.includes(`\`${value}\``)) throw new Error(`law missing ${value}`);
if (!schema.properties.truth_stage.enum.includes(example.truth_stage)) throw new Error("invalid truth stage");
if (!law.includes("require approval")) throw new Error("hard approval boundary missing");
console.log(`✓ RL-SR-INTAKE-001 · ${dispositions.length} dispositions · schema/example/law aligned`);
