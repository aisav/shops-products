import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let shops = this.get('store').findAll('shop');

    return shops;
  },
});
