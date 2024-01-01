describe("CardAccount", () => {
    test("CardAccount", async () => {
      const cmp = await import("../components/CardAccount.vue");
      expect(cmp).toBeDefined();
    });
  });