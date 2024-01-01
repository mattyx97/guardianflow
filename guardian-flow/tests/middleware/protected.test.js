describe("protected", () => {
    test("protected", async () => {
      const cmp = await import("../components/protected.ts");
      expect(cmp).toBeDefined();
    });
  });