import fs from "fs";

const readFileWithErrorHandling = function (fileName, callback) {
  let file;
  try {
    file = fs.openSync(fileName, "r");
    try {
      const data = fs.readFileSync(file, "utf8");
      let fileSize = Buffer.byteLength(data, "utf8");
      callback(`File read successfully. Size:${fileSize} bytes`);
    } catch (error) {
      if (error.code === "EISDIR") callback(`Cannot Read Directory`);
      else callback(`Cannot Read File: ${fileName}`);
    } finally {
      if (file) fs.closeSync(file);
    }
  } catch (error) {
    callback(`File not found: ${fileName}`);
  }
};

readFileWithErrorHandling("existing.txt", (result) => {
  console.log(result);
  // Success: "File read successfully. Size: 150 bytes"
  // Or error: "File not found: existing.txt"
});
