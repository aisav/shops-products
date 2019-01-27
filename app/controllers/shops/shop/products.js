import Controller from '@ember/controller';

export default Controller.extend({

  isAddingProduct: false,

  actions: {
    addProduct() {
      this.set('isAddingProduct', true);
      return false
    },

    cancelAddProduct() {
      this.set('isAddingProduct', false);
      return false
    },

    async addSavedProduct() {
      let newProduct = this.store.createRecord('product',{
        name: this.newProductName,
        quantity: this.newProductQuantity,
        price: this.newProductPrice       });
      await newProduct.save();
      this.model.products.pushObject(newProduct);
      this.setProperties({
        newBandName: '',
        newProductQuantity: '',
        newProductPrice: '',
        isAddingProduct: false
      });
    }
  }
});
