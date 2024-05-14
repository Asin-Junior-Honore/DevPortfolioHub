const fs = require("fs");

try {
  if (!fs.existsSync("contributors.json")) {
    throw new Error("contributors.json file not found.");
  }

  const contributorsData = JSON.parse(
    fs.readFileSync("contributors.json", "utf8")
  );

  if (!Array.isArray(contributorsData)) {
    throw new Error("Contributors data is not an array.");
  }

  contributorsData.sort((a, b) => a.name.localeCompare(b.name));

  const contributorsMarkdown = contributorsData
    .map((contributor) => {
      // Check if the portfolio URL already includes http:// or https:// prefix
      const portfolioUrl = contributor.portfolio.startsWith("http")
        ? contributor.portfolio
        : `http://${contributor.portfolio}`;

      return `- [${contributor.name}](${portfolioUrl})`;
    })
    .join("\n");

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

  fs.writeFileSync("README.md", readme, "utf8");

  console.log("Readme updated successfully!");
} catch (error) {
  console.error("Error updating readme:", error.message)
}
