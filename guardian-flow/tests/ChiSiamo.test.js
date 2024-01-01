
describe('chisiamo ', () => {
  test('chisiamo ',  async () =>{
   const cmp = await import('../pages/chisiamo.vue');
     expect(cmp).toBeDefined();
   });
 });