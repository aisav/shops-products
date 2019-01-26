import Route from '@ember/routing/route';

export default Route.extend({

  model(params) {
    let shops = this.modelFor('shops');
    return shops.findBy('slug', params.slug);

    // we can write by id with one line
    // return this.get('store').findRecord('shop', params.id);
  },
});
