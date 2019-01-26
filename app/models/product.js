import DS from 'ember-data';
const { Model, attr, hasMany } = DS;

export default Model.extend({

  name: attr('string'),
  quantity: attr('number'),
  price: attr('number'),

  shops: hasMany('shop')

});
