
describe('piani ', () => {
  test('piani ',  async () =>{
   const cmp = await import('../pages/piani.vue');
     expect(cmp).toBeDefined();
   });
 });