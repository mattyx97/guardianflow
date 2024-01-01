describe("CardPiano", () => {
    test("CardPiano", async () => {
      const cmp = await import("../components/CardPiano.vue");
      expect(cmp).toBeDefined();
    });
  });