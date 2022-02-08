<template>

  <v-content style="margin-top: 20px;margin-left: 230px">
    <v-container class="fill-height about" fluid>
      <v-card
          class="elevation-12"
          color="#FFFFF"
          height="200px"
          width="1000px"
      >
        <v-row align="right" justify="right">
          <v-col cols="12" align="right">
            <v-btn class="font-weight-light">Alışverişe Devam Et</v-btn>
          </v-col>
        </v-row
        >

        <div class="d-flex flex-row">
          <v-row>
            <v-col>
              <v-div>
                <v-img
                    height="150"
                    width="150px"
                    src="https://www.avva.com.tr/Uploads/UrunResimleri/thumb/siyah-skinny-fit-jean-pantolon-7ba7a5.jpg"
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
                    Siyah Skinny Jean Pantolon
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
                      <del>₺ 375,00</del>
                    </h3>
                  </v-list-item-subtitle
                  >
                  <v-list-item-subtitle class="font-weight-bold">
                    <h3 class="font-weight-bold ml-0" color="#ECEFF1">
                      ₺ 175,00
                    </h3>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

            </v-col>
            <v-col style="margin-top: 110px">
              <v-row align="right" justify="right">
                <v-col cols="11" align="right">
                  <div class="text-decoration-underline">Sepeti Temizle</div>
                </v-col
                >
              </v-row>
            </v-col>
          </v-row>


        </div>


      </v-card>


      <div>
        <v-card height="330" width="400px" color="#ECEFF1">
          <v-row align="center" justify="center">
            <v-col cols="12" sm="12" align="center">
              <v-btn
                  style="background-color: black; color: white"
                  width="380px"
                  class="font-weight-light"
              >
                Sepeti Onayla
              </v-btn>
            </v-col>
          </v-row>

          <v-card style="margin-top: 10px;margin-left: 10px" cols="12" sm="12" height="150" width="380px" color="#FFFFFF">
            <v-row  width="380px">
              <v-col style="width: 400px">Sipairiş Tutarı</v-col>
              <v-col style="width:80px;margin-left: 150px ">₺175,99</v-col>
            </v-row>
            <v-row  width="380px">
              <v-col style="width: 400px">Kargo Ücreti</v-col>
              <v-col style="width:80px;margin-left: 150px ">₺9,99</v-col>
            </v-row>
            <v-row  width="380px">
              <v-col style="width: 400px">Sepet Toplamı</v-col>
              <v-col style="width:80px;margin-left: 150px ">₺175</v-col>
            </v-row>

          </v-card>
          <v-card style="margin-top: 20px;margin-left: 10px" cols="12" sm="12" height="50" width="380px" color="#FFFFFF">
            <v-row  width="180px">
              <v-col style="width: 400px"> <v-icon style="flex-direction: column;"> mdi-car</v-icon> Tahmini Kargoya Teslim Süresi : 1-3 İş Günü</v-col>

            </v-row>


          </v-card>
          <v-row style="margin-top: 10px" align="center" justify="center">
            <v-col cols="12" sm="12" align="center">
              <v-btn
                  style="background-color: black; color: white"
                  width="380px"
                  class="font-weight-light"
              >
                Sepeti Onayla
              </v-btn>
            </v-col>
          </v-row>


        </v-card>
      </div>
    </v-container>
  </v-content>

</template>
