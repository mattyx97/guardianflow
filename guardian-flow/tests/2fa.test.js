
describe('2fa', () => {
  test('2fa',  async () =>{
   const cmp = await import('../pages/2fa.vue');
     expect(cmp).toBeDefined();
   });
 });