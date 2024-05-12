const fs = require("fs");

try {
  // Read contributors.json file
  const contributorsData = JSON.parse(
    fs.readFileSync("contributors.json", "utf8")
  );

  // Check if contributorsData is an array
  if (!Array.isArray(contributorsData)) {
    throw new Error("Contributors data is not an array.");
  }

  // Sort contributors alphabetically by name
  contributorsData.sort((a, b) => a.name.localeCompare(b.name));

  // Generate markdown for contributors
  const contributorsMarkdown = contributorsData
    .map((contributor) => `- [${contributor.name}](${contributor.portfolio})`)
    .join("\n");

  // Read README.md file
  let readme = fs.readFileSync("README.md", "utf8");

  // Find <!-- CONTRIBUTORS_START --> and <!-- CONTRIBUTORS_END --> placeholders in README.md
  const startPattern =
    /<!-- CONTRIBUTORS_START -->[\s\S]*?<!-- CONTRIBUTORS_END -->/;
  const endPattern = /<!-- CONTRIBUTORS_END -->/;

  // Replace content between placeholders with updated contributors list
  readme = readme.replace(
    startPattern,
    `<!-- CONTRIBUTORS_START -->\n${contributorsMarkdown}\n<!-- CONTRIBUTORS_END -->`
  );

  // Write updated README.md file
  fs.writeFileSync("README.md", readme, "utf8");

  console.log("Readme updated successfully!");
} catch (error) {
  console.error("Error updating readme:", error.message);
}
