import Route from '@ember/routing/route';

export default Route.extend({

  model(params) {
    let shops = this.modelFor('shops');
    return shops.findBy('id', params.id);

  },
});
