const download = require("image-downloader");
var fs = require("fs");

function downloadImage(url, filepath) {
  return download.image({
    url,
    dest: filepath,
  });
}
async function main() {
  let base = "https://img.chainrunners.xyz/api/v1/tokens/png/";
  let projectName = "./Runners/images/";
  let size = 13000;

  if (!fs.existsSync(projectName)) {
    fs.mkdirSync(projectName, { recursive: true });
  }

  for (var i = 10005; i < size; i++) {
    let file = base + i;
    await downloadImage(file, __dirname + "/" + projectName);
  }
  console.log("Download complete");
}

try {
  main();
} catch (error) {
  console.error(error);
}
