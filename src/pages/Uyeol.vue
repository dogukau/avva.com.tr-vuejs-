<template>
  <v-app>
    <Header/>
    <v-main>
      <v-row>
        <v-col>
          <Uyelik/>
        </v-col>
        <v-col>
          <UyeGiris/>
        </v-col>
      </v-row>
    </v-main>
    <v-main>


    </v-main>
  </v-app>


</template>

<script>
import Header from "@/components/Header";
import Uyelik from "@/components/Uyelik";
import UyeGiris from "@/components/UyeGiris";

export default {
  name: "Index",
  components: {UyeGiris, Uyelik, Header}
}
</script>

<style scoped>

</style>
