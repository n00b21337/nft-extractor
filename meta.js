const download = require("download");
var fs = require("fs");

function downloadJson(url, filePath) {
  return download(url, filePath).then(() => {});
}

function printProgress(progress, total) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(progress + "/" + total);
}

async function main() {
  let baseURI = "https://api.chainrunners.xyz/tokens/metadata/";
  let projectName = "Runners";

  let folderBase = "/extracted";
  let projectDir = __dirname + folderBase + "/" + projectName + "/meta/";
  let size = 13000;

  if (!fs.existsSync(projectDir)) {
    fs.mkdirSync(projectDir, { recursive: true });
  }

  for (var i = 1; i < size; i++) {
    let file = baseURI + i;
    await downloadJson(file, projectDir);
    printProgress(i, size);
  }
  console.log("Download complete");
}

try {
  main();
} catch (error) {
  console.error(error);
}
