import Component from '@ember/component';

export default Component.extend({
  tagName: '',
  isEditingShop: false,
  shopName:null,

  actions: {

    cancelAddingShop(){
      this.set('isAddingShop', false);
      this.set('shopName', null);
    },
    editShop(){
      this.set('isEditingShop', true);
    },
    cancelEditingShop(){
      this.set('shopName', null);
      this.set('isEditingShop', false);
    },
    saveShop(){
      this.set('shop.name', this.get('shopName') || this.get('shop.name'));
      this.get('shop').save();
      this.set('isEditingShop', false);
    },
    deleteShop(shop){
      shop.deleteRecord()
      shop.get('isDeleted'); // => true
      shop.save(); // => DELETE to /posts/1
    }
  }
});
