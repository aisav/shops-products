import Component from '@ember/component';
// import Product from '../models/product';

export default Component.extend({
  tagName: '',
  isAddingProduct: false,
  isEditingProduct: false,
  productName:null,
  productQuantity:null,
  productPrice:null,

  // productName: '',
  actions: {
    addProduct(){
      this.set('isAddingProduct', true);
    },
    cancelAddingProduct(){
      this.set('isAddingProduct', false);
      this.set('productName', null);
      this.set('productQuantity', null);
      this.set('productPrice', null);
    },
    editProduct(){
      this.set('isEditingProduct', true);
    },
    cancelEditingProduct(){
      this.set('isEditingProduct', false);
      this.set('productName', null);
      this.set('productQuantity', null);
      this.set('productPrice', null);
    },
    saveProduct(){
      this.set('product.name', this.get('productName') || this.get('product.name'));
      this.set('product.price', this.get('productPrice') || this.get('product.price'));
      this.set('product.quantity', this.get('productQuantity') || this.get('product.quantity'));
      this.get('product').save();
      this.set('isEditingProduct', false);
    },
    saveaddProduct(product){
    // add to shop array
      let newProduct;
      this.set('newProduct.name', this.get('productName') || this.get('product.name'));
      this.set('newProduct.price', this.get('productPrice') || this.get('product.price'));
      this.set('newProduct.quantity', this.get('productQuantity') || this.get('product.quantity'));
      product.shop.products.push(newProduct)
    },
    deleteProduct(product){
      product.deleteRecord()
      product.get('isDeleted'); // => true
      product.save(); // => DELETE to /posts/1
    }
  }
});
