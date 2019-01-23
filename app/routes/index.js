import Route from '@ember/routing/route';

export default Route.extend({

  beforeModel() {
    console.log('index')
    this.transitionTo('shops');
  }
});
