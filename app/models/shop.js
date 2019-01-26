import DS from 'ember-data';
const { Model, attr, hasMany } = DS;
import { computed } from '@ember/object';
import { dasherize } from '@ember/string';

export default Model.extend({

  name: attr('string'),

  slug: computed('name', function() {
    return dasherize(this.name);
  }),

  products: hasMany('product')
});
