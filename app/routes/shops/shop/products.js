import Route from '@ember/routing/route';

export default Route.extend({

  model() {

    let shop = this.modelFor('shops.shop')

    // console.log("+++++++")

    return shop.products


  },

  actions: {
    didTransition() {
      let shop = this.modelFor('shops.shop');
      document.title = `${shop.name} products`;
    },
  }
});
