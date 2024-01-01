describe("CardPayment", () => {
  test("CardPayment", async () => {
    const cmp = await import("../components/CardPayment.vue");
    expect(cmp).toBeDefined();
  });
});
