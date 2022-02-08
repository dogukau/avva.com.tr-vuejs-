<template>
  <div class="add-to-cart">
    <v-btn class="btn btn-primary" @click="addToCart">Sepete Ekle</v-btn>
  </div>
</template>
<script>
// import $ from 'jquery';
export default {
  name: "add-to-cart",
  props: {
    name: String,
    price: String,
    productId: String,
    picture:String
  },
  data() {
    return {
      item : {
        productName: this.name,
        productPrice: this.price,
        productID: this.productId,
        productImage: this.picture,
      }

    }
  },
  methods:{
    addToCart() {
     /* $('#miniCart').modal('show');*/
      this.$store.commit('addToCart', this.item)


    }

  }

};
</script>

