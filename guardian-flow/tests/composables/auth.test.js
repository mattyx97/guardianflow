describe("auth", () => {
    test("auth", async () => {
      const cmp = await import("../composables/auth.ts");
      expect(cmp).toBeDefined();
    });
  });