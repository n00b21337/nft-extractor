const download = require("image-downloader");
var fs = require("fs");

function downloadImage(url, filepath) {
  return download.image({
    url,
    dest: filepath,
  });
}

function printProgress(progress, total) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(progress + "/" + total);
}

async function main() {
  let baseURI = "https://img.chainrunners.xyz/api/v1/tokens/png/";
  let projectName = "Runners";

  let folderBase = "/extracted";
  let projectDir = __dirname + folderBase + "/" + projectName + "/images/";
  let size = 13000;

  if (!fs.existsSync(projectDir)) {
    fs.mkdirSync(projectDir, { recursive: true });
  }

  for (var i = 1; i < size; i++) {
    let file = baseURI + i;
    await downloadImage(file, projectDir);
    printProgress(i, size);
  }
  console.log("Download complete");
}

try {
  main();
} catch (error) {
  console.error(error);
}
