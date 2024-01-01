describe("CardContact", () => {
  test("CardContact", async () => {
    const cmp = await import("../components/CardContact.vue");
    expect(cmp).toBeDefined();
  });
});
