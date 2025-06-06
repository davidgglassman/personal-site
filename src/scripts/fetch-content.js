import { execSync } from "child_process";
import fs from "fs";
import path from "path";

// Manually load .env
import dotenv from "dotenv";
dotenv.config();

const REPO_URL = process.env.CONTENT_REPO_URL;
const DEST_DIR = path.resolve("content");

// fail if we can't get the environment variable
if (!REPO_URL) {
  console.error("❌ Missing CONTENT_REPO_URL environment variable.");
  process.exit(1);
}

// Clean the old content directory
if (fs.existsSync(DEST_DIR)) {
  fs.rmSync(DEST_DIR, { recursive: true, force: true });
}

// Clone the content repo
try {
  execSync(`git clone ${REPO_URL} ${DEST_DIR}`, { stdio: "inherit" });
  console.log("✅ Content cloned into /content.");
} catch (error) {
  console.error("❌ Failed to clone content repo:", error);
  process.exit(1);
}

// Fallback: confirm that content was actually cloned
if (!fs.existsSync(DEST_DIR) || fs.readdirSync(DEST_DIR).length === 0) {
  console.error("❌ Content directory is missing or empty after clone. Check your repo and token.");
  process.exit(1);
}

// Remove unnecessary files
const filesToRemove = [".gitattributes", ".gitignore", "README.md"];

filesToRemove.forEach((file) => {
  const filePath = path.join(DEST_DIR, file);
  if (fs.existsSync(filePath)) {
    fs.rmSync(filePath);
    console.log(`🧹 Removed: ${file}`);
  }
});
