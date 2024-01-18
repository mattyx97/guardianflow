
describe('user', () => {
  test('user',  async () =>{
   const cmp = await import('../pages/gestionale/Utente/user.vue');
     expect(cmp).toBeDefined();
   });
 });