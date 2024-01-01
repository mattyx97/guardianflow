
describe('anomalie ', () => {
  test('anomalie ',  async () =>{
   const cmp = await import('../pages/gestionale/Dashboard/anomalie.vue');
     expect(cmp).toBeDefined();
   });
 });