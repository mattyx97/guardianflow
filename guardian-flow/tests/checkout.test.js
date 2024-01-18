
describe('checkout ', () => {
  test('checkout ',  async () =>{
   const cmp = await import('../pages/checkout.vue');
     expect(cmp).toBeDefined();
   });
 });