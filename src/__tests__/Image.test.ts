import Image from "../models/Image";

describe("Image.resize()", () => {
  it("resizes an image", async () => {
    const img = new Image("fjord", 200, 200);
    const res = await img.resize();
    expect(res).toBeTruthy();
  });

  it("throws an Error when file not found", async () => {
    expect.assertions(1);
    const img = new Image("notfound", 200, 200);
    try {
      await img.resize();
    } catch (error) {
      expect((error as Error).message).toBe("Input file is missing");
    }
  });
});
