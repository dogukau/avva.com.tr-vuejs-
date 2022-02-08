<template>
  <v-col col="25" style="margin-top: 50px">
    <div class="d-flex flex-row">
      <div style="margin-left: 185px;margin-top: 17px">
        <v-img
            class="ml-1 mt-3"
            height="26.56"
            width="170"
            src="https://www.avva.com.tr/Uploads/images/logo.png"
        ></v-img>
      </div>

      <label style="width: 150px"></label>


      <div style="width: 460px;margin-left: 40px;height: 40px;">
        <v-text-field
            height="30px"
            style="border-radius: 10px;"

            background-color="#f9f9f9"
            class="search-input ml-8 mt-4"
            solo
            label="Slim Feat Jean Pantolan"
            rounded
            append-icon="mdi-magnify"
        ></v-text-field>

      </div>
      <div style="float: left;margin-left: 215px">

        <v-btn
            color="black" class="mdi-account mt-5 ml-0" icon>
          <v-icon> mdi-bell-outline</v-icon>
        </v-btn
        >
      </div>
      <div style="margin-left: 20px">


        <v-btn to="/uyeol"
               color="black" class="mdi-account mt-5 ml-0" icon>
          <v-icon style="flex-direction: column;"> mdi-account-outline</v-icon>


        </v-btn
        >
      </div>
      <div style="margin-left: 40px">


        <v-btn
            color="black" class="mdi-account mt-5 ml-0" icon>
          <v-icon style="flex-direction: column;"> mdi-star-outline</v-icon>


        </v-btn
        >
      </div>
      <div style="margin-left: 30px">

        <v-btn to="/sepet" color="black" class="mdi-account-plus mt-5 ml-1" icon>
          <v-icon> mdi-shopping-outline</v-icon>
        </v-btn
        >

      </div>


    </div>


  </v-col>
</template>
