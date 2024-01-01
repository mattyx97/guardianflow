
describe('contatti ', () => {
  test('contatti ',  async () =>{
   const cmp = await import('../pages/contatti.vue');
     expect(cmp).toBeDefined();
   });
 });