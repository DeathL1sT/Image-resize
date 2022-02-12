import sharp from "sharp";
import fs from "fs";

class Image {
  filename: string;
  width: number;
  height: number;

  constructor(filename: string, width: number, height: number) {
    this.filename = filename;
    this.width = width;
    this.height = height;
  }

  async resize(): Promise<string> {
    const outFile = `assets/thumbnuil/${this.filename}_${this.width}x${this.height}.jpg`;

    if (!fs.existsSync(outFile)) {
      await sharp(`assets/full/${this.filename}.jpg`)
        .resize(this.width, this.height)
        .toFile(outFile);
    }

    return outFile;
  }
}

export default Image;
