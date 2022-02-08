<template>
  <v-app>
    <Header/>
    <v-main>
      <UrunDetay/>
      <SanaOzelUrunler style="margin-top: 25px"/>

    </v-main>
  </v-app>


</template>

<script>
import Header from "@/components/Header";
import UrunDetay from "@/components/urun-detay";
import SanaOzelUrunler from "@/components/SanaOzelUrunler";

export default {
  props: ['id'],
  computed:{
    product() {
      return this.$store.state.product;
    }
  },

  mounted() {
    this.$store.dispatch('getProduct',this.id);
  },
  components: {SanaOzelUrunler, UrunDetay, Header}
}
</script>
