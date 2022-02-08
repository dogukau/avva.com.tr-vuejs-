<template>
  <v-app>
    <Header/>
    <!-- Modal -->
    <div class="modal fade" id="miniCart" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Sepetim</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <ul>
<!--              <li v-for="item in this.$store.state.cart">
                {{item.productName}}

              </li>-->

            </ul>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Alışverişe Devam Et</button>
            <button type="button" class="btn btn-primary">Ödemeye Geç</button>
          </div>
        </div>
      </div>
    </div>
    <v-main style="margin-top: 50px">

      <v-row>
        <v-col style="margin-left: 150px" v-for="product in products" :key="product.id" :product="product">
          <v-card style="margin-left: 120px;float: left;"
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
                :src="product.picture"
            ></v-img>

            <v-card-text>
              <v-row
                  align="center"
                  class="mx-0"
              >


              </v-row>

              <div class="my-4 text-subtitle-1" style="color: black;">
                {{ product.name }}
              </div>

              <div style="color: black;margin-left: 270px">
                <v-col align="center">
                  <v-row align="center">
                    ₺{{ product.price }}
                  </v-row>
                  <v-row>
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
                <add-to-cart
                    :picture="product.picture"
                    :product-id="product.id"
                    :price="product.price"
                    :name="product.name">

                </add-to-cart>


                <v-chip style="width: 200px;background-color: #309200;color: white">2 Al %10 / 3 Al %20 İndirim</v-chip>


              </v-chip-group>
            </v-card-text>

          </v-card>
        </v-col>

      </v-row>


    </v-main>
  </v-app>
</template>
<script>

import {db} from "../firebase";
import Header from "@/components/Header";

export default {
  name: "tum-urunler",
  components: {Header},
  props: {
    msg: String
  },
  data() {
    return {
      product: {
        name: null,
        price: null
      },
      products: [],
    }
  },
  created() {
    db.collection("products").get().then((querySnapshot) => {
      //this.products = querySnapshot;
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // const data =doc.data();
        // this.products.push(doc.data())

        this.products.push(doc.data());
        //console.log(doc.id,"=>",doc.data());
      });
    });
  }


}
</script>

<style scoped>

</style>
