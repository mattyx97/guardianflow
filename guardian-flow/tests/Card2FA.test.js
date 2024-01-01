describe("Card2FA", () => {
    test("Card2FA", async () => {
      const cmp = await import("../components/Card2FA.vue");
      expect(cmp).toBeDefined();
    });
  });