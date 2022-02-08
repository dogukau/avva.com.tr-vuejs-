<template>
  <router-link :to="{name: 'product', params: {id: product.id}}">
    <v-card
        :loading="loading"
        class="mx-auto my-12"
        max-width="800"
    >
      <template slot="progress">
        <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
        ></v-progress-linear>
      </template>

      <v-img
          height="915"
          width="610"
          :src="product.image"
      ></v-img>

      <v-card-text>
        <v-row
            align="center"
            class="mx-0"
        >


        </v-row>

        <div align="center" class="my-4 text-subtitle-1" style="color: black">
          {{ product.ad }}
        </div>

        <div align="center" style="color: black;margin-left: 270px">
          <v-col align="center">
            <v-row align="center">
              <del> {{ product.fiyat }}</del>
            </v-row>
            <v-row>
              {{ product.fiyat }}
            </v-row>
          </v-col>
        </div>
      </v-card-text>

      <v-card-text align="center" style="margin-left: 200px;">
        <v-chip-group align="center"
                      v-model="selection"
                      active-class="deep-purple accent-4 white--text"
                      column
        >
          <v-chip style="width: 200px;background-color: #309200;color: white">2 Al %10 / 3 Al %20 İndirim</v-chip>


        </v-chip-group>
      </v-card-text>

    </v-card>
  </router-link>
</template>

<script>
export default {
  props: ["product"]
};
</script>

<style scoped>

</style>
