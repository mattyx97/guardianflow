describe("UsersTableRow", () => {
  test("UsersTableRow", async () => {
    const cmp = await import("../components/UsersTableRow.vue");
    expect(cmp).toBeDefined();
  });
});
