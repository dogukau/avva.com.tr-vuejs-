<template>

    <v-content v-if="product" style="margin-left: 280px;margin-top: 20px">
      <v-container class="fill-height about" fluid>
        <div class="d-flex flex-row">
          <v-row align="left" justify="left">
            <v-col cols="12" sm="12" align="left">
              <v-card
                class="elevation-12"
                color="#FFFFF"
                height="530px"
                width="420px"
              >
                <v-div>
                  <v-img
                    height="422"
                    width="633"
                    src="https://www.avva.com.tr/Uploads/UrunResimleri/siyah-skinny-fit-jean-pantolon-7ba7a5.jpg"
                  >
                  </v-img>
                </v-div>

                <div class="d-flex flex-row">
                  <v-row>
                    <v-col cols="2" sm="3">
                      <v-img
                        width="100px"
                        src="https://www.avva.com.tr/Uploads/UrunResimleri/siyah-skinny-fit-jean-pantolon-7ba7a5.jpgg"
                      >
                        <div class="fill-height bottom-gradient"></div
                      ></v-img>
                    </v-col>

                    <v-col cols="2" sm="3">
                      <v-img
                        width="100px"
                        src="https://www.avva.com.tr/Uploads/UrunResimleri/siyah-skinny-fit-jean-pantolon-7ba7a5.jpg"
                      >
                        <div class="fill-height bottom-gradient"></div>
                      </v-img>
                    </v-col>

                    <v-col cols="2" sm="3">
                      <v-img
                        width="100px "
                        src="https://www.avva.com.tr/Uploads/UrunResimleri/siyah-skinny-fit-jean-pantolon-7ba7a5.jpg"
                      >
                        <div class="fill-height repeating-gradient"></div>
                      </v-img>
                    </v-col>

                    <v-col cols="2" sm="3">
                      <v-img
                        width="100px"
                        src="https://www.avva.com.tr/Uploads/UrunResimleri/siyah-skinny-fit-jean-pantolon-7ba7a5.jpg"
                      >
                        <div class="fill-height repeating-gradient"></div>
                      </v-img>
                    </v-col>
                  </v-row>
                </div> </v-card></v-col
          ></v-row>

          <v-card height="530" width="900px" color="white" class="ml-2 mt-0">
            <v-row align="right" justify="right">
              <v-col cols="1" sm="1" align="center"> </v-col>
            </v-row>

            <v-card
              height="150"
              width="900px"
              color="#FFFFFF"
              class="ml-0 mt-0"
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-subtitle class="ml-5 mt-0">
                    <router-link :to="{name: 'product', params: {id: product.id}}"></router-link>
                    {{product.name }}
                  </v-list-item-subtitle>
                  <v-list-item-title class="ml-5 mt-5"
                    >Ürün Kodu: E003513-03
                  </v-list-item-title>
                  <div class="d-flex flex-row">
                    <v-list-item-h1 class="font-weight-bold ml-5 mt-10">
                      ₺ 189,00
                    </v-list-item-h1>
                  </div>
                </v-list-item-content>
              </v-list-item>
            </v-card>

            <v-card
              height="360"
              width="900px"
              color="#FFFFFF"
              class="ml-0 mt-0"
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="d-flex flex-row">
                    <v-list-item-subtitle
                      class="font-weight-bold class= ml-5 mt-10"
                    >
                      Beden:
                      <v-combobox
                        solo
                        dense
                        class="ml-5 mt-5 mr-12"
                        outlined
                        label="Seçiniz"
                      ></v-combobox>
                    </v-list-item-subtitle>
                  </div>
                </v-list-item-content>
              </v-list-item>

              <v-list-item three-line>
                <v-list-item-content>
                  <div class="d-flex flex-row"></div>
                </v-list-item-content>
              </v-list-item>
              <div class="d-flex flex-row">
                <label style="width: 300px"></label>
                <v-btn
                  class="rounded-0 ml-12 mt-7"
                  style="background-color: black; color: white"
                  width="200px"
                >
                  SEPETE EKLE</v-btn
                >

                <v-btn
                  class="rounded-0 ml-1 mt-7"
                  style="background-color: white"
                  width="200px"
                >
                  <v-icon>mdi-star</v-icon></v-btn
                >
              </div>
            </v-card>
          </v-card>
        </div>
      </v-container>
    </v-content>

</template>
<script>
export default {
  props: ["id"],
  computed:{
    product() {
      return this.$store.state.product;
    }
  },
  mounted() {this.$store.dispatch("getProduct",this.id)
  }
};
</script>
