<template>
  <v-app>
    <Header/>
    <v-main>


      <v-card style="margin-top: 100px;margin-left: 250px"  v-for="item in this.$store.state.cart" :key="item.productID"
          class="elevation-12"
          color="#FFFFF"
          height="200px"
          width="1000px"
      >


        <div class="d-flex flex-row">
          <v-row  >
            <v-col>
              <v-div>
                <v-img
                    height="150"
                    width="150px"
                    :src="item.productImage"
                ></v-img>
              </v-div>
            </v-col>
            <v-col>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-subtitle class="font-weight-bold"
                  >AVVA
                  </v-list-item-subtitle
                  >
                  <v-list-item-subtitle class="font-weight-bold">
                    {{ item.productName }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle class="font-weight-bold">
                    Renk: sİYAH
                  </v-list-item-subtitle>
                  <v-list-item-subtitle class="font-weight-bold">
                    Beden: 30
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col>

              <v-text-field
                  dense
                  class="rounded-0 ml-0 mr-15"
                  outlined
                  label="1"
              ></v-text-field>

            </v-col>
            <v-col>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-subtitle class="font-weight-bold"
                  >
                    <h3 class="font-weight-bold ml-0 mr-15">
                      <del>₺   {{ item.productPrice }}</del>
                    </h3>
                  </v-list-item-subtitle
                  >
                  <v-list-item-subtitle class="font-weight-bold">

                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

            </v-col>
            <v-col style="margin-top: 110px">


            </v-col>
          </v-row>


        </div>


      </v-card>
    </v-main>

  </v-app>


</template>

<script>
import Header from "@/components/Header";
export default {
  name: "Index",
  components: {  Header}
}
</script>

<style scoped>

</style>
