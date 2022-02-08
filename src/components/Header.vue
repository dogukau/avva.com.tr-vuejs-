<template>
  <v-app-bar
      style="padding: 0 90px"
      app
      color="white"
      light
      elevation="6"
      elevate-on-scroll>


    <v-row align="center" justify="center">

<Arama/>
      <Kategoriler/>

    </v-row>


  </v-app-bar>

</template>


<script>
import Arama from "@/components/Arama";
import Kategoriler from "@/components/Kategoriler";
export default {
  components: {Kategoriler, Arama}
}
</script>
