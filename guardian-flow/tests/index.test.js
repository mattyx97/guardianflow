
describe('index ', () => {
 test('index ',  async () =>{
  const cmp = await import('../pages/index.vue');
    expect(cmp).toBeDefined();
  });
});