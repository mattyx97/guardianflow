describe("CardWarning", () => {
  test("CardWarning", async () => {
    const cmp = await import("../components/CardWarning.vue");
    expect(cmp).toBeDefined();
  });
});
