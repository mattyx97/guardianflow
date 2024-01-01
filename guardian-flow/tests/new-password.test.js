describe('anomalie ', () => {
  test('anomalie ',  async () =>{
   const cmp = await import('../pages/new-password.vue');
     expect(cmp).toBeDefined();
   });
 });