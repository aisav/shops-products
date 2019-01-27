import Controller from '@ember/controller';
import Product from '../../../models/product'

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

    // addSavedProduct(product){
    //   // add to shop array
    //   let newProduct;
    //   this.set('newProduct.name', this.get('productName') || this.get('product.name'));
    //   this.set('newProduct.price', this.get('productPrice') || this.get('product.price'));
    //   this.set('newProduct.quantity', this.get('productQuantity') || this.get('product.quantity'));
    //   product.shop.products.push(newProduct)
    // },

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
