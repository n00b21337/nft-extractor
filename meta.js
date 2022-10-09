const download = require("download");
var fs = require("fs");

function downloadJson(url, filePath) {
  return download(url, filePath).then(() => {});
}
async function main() {
  let base = "https://api.chainrunners.xyz/tokens/metadata/";
  let folderBase = "/extracted";
  let projectDir = __dirname + folderBase + "/Runners/meta/";
  let size = 13000;

  if (!fs.existsSync(projectName)) {
    fs.mkdirSync(projectName, { recursive: true });
  }

  for (var i = 9960; i < size; i++) {
    let file = base + i;
    await downloadJson(file, projectName);
  }
  console.log("Download complete");
}

try {
  main();
} catch (error) {
  console.error(error);
}
