import DS from 'ember-data';
const { Model, attr, hasMany } = DS;
import { computed } from '@ember/object';

export default Model.extend({

  name: attr('string'),

  totalPrice: computed('products', function() {
    let sum=0;
    let products = this.get('products').toArray();
    for (let i=0; i<products.length; i++) {
      sum += products[i].price * products[i].quantity;
    }
    return sum;
  }),

  products: hasMany('product')
});
