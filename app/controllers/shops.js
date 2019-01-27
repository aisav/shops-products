import Controller from '@ember/controller';

export default Controller.extend({

  isAddingShop: false,

  actions: {
    addShop() {
      this.set('isAddingShop', true);
      return false
    },

    cancelAddShop() {
      this.setProperties({
        isAddingShop: false,
        newShopName: null
      })
      return false
    },

    async addSavedShop() {
      let newShop = this.store.createRecord('shop',{
        name: this.newShopName,
      });
      await newShop.save();
      this.model.shops.pushObject(newShop);
      this.setProperties({
        newBandName: '',
        isAddingShop: false
      });
    }
  }
});
