describe("auth", () => {
    test("auth", async () => {
      const cmp = await import("../middleware/auth.global.ts");
      expect(cmp).toBeDefined();
    });
  });