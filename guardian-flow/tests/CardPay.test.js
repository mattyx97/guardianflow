describe("CardPay", () => {
    test("CardPay", async () => {
      const cmp = await import("../components/CardPay.vue");
      expect(cmp).toBeDefined();
    });
  });