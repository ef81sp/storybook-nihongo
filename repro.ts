import { createChecker } from "vue-component-meta";
import path from "node:path";

const checker = createChecker(
  path.resolve("tsconfig.json"),
  {}
);

const meta = checker.getComponentMeta(
  path.resolve("src/components/Greeting.vue")
);

console.log("=== Props ===");
for (const prop of meta.props) {
  console.log(`${prop.name}: default = ${JSON.stringify(prop.default)}`);
}
