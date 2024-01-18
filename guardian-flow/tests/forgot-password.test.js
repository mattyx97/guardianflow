
describe('anomalie ', () => {
  test('anomalie ',  async () =>{
   const cmp = await import('../pages/forgot-password.vue');
     expect(cmp).toBeDefined();
   });
 });