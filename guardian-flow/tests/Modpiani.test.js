
describe('modpiani ', () => {
  test('modpiani ',  async () =>{
   const cmp = await import('../pages/gestionale/Piano/Modpiani.vue');
     expect(cmp).toBeDefined();
   });
 });