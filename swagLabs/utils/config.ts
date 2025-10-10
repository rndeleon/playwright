import * as fs from "fs";
import * as path from "path";

const env = process.env.TEST_ENV || "dev";

// build an absolute path to config/dev.json
const filePath = path.resolve(__dirname, `../config/${env}.json`);

if (!fs.existsSync(filePath)) {
  throw new Error(`Config file not found: ${filePath}`);
}

const config = JSON.parse(fs.readFileSync(filePath, "utf-8"));

export default config;
