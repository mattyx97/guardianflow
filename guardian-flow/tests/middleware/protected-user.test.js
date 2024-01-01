describe("protected-user", () => {
    test("protected-user", async () => {
      const cmp = await import("../middleware/protected-user.ts");
      expect(cmp).toBeDefined();
    });
  });