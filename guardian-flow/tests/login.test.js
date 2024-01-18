
describe('anomalie ', () => {
  test('anomalie ',  async () =>{
   const cmp = await import('../pages/login.vue');
     expect(cmp).toBeDefined();
   });
 });