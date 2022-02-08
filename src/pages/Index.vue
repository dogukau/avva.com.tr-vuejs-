<template>
    <v-app>
    <Header/>
   <v-main>
     <Slider/>

   </v-main>
      <v-main>
        <sana-ozel-urunler/>
      </v-main>
  </v-app>


</template>

<script>
import Header from "@/components/Header";
import Slider from "@/components/slider";
import SanaOzelUrunler from "@/components/SanaOzelUrunler";
export default {
  name: "Index",
  components: {SanaOzelUrunler, Slider, Header}
}
</script>

<style scoped>

</style>
