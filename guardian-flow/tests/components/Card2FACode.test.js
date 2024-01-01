describe("Card2FACode", () => {
    test("Card2FACode", async () => {
      const cmp = await import("../components/Card2FACode.vue");
      expect(cmp).toBeDefined();
    });
  });