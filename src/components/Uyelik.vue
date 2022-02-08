<template>
  <v-app>
    <v-content>
      <v-container class="fill-height about" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="12" align="center">
            <v-card class="elevation-12" color="white" height="900px" width="700px">
              <div id="login">
                <h1 class="black--text text-sm-left ml-5 mb-5 mt-5">Hızlı Üyelik</h1>


                <v-text-field id="name" dense class="rounded-0 ml-5 mr-5" outlined label="Adınız"
                              v-model="name"></v-text-field>
                <v-text-field id="email" type="email" dense class="rounded-0 ml-5 mr-5" outlined
                              label="E-posta" v-model="email"></v-text-field>
                <v-text-field id="password" type="password" dense class="rounded-0 ml-5 mr-5" v-model="password"
                              outlined label="Şifre"
                ></v-text-field>
                <v-text-field dense class="rounded-0 ml-5 mr-5" outlined label="+90"></v-text-field>
                <v-checkbox class="ml-10" label="Kampanya, duyuru ve tüm sipariş süreçlerinden e-posta ile haberdar olmak istiyorum..
                                       "></v-checkbox>
                <v-checkbox class="ml-10"
                            label="Kampanya, duyuru ve tüm sipariş süreçlerinden sms ile haberdar olmak istiyorum.."></v-checkbox>

                <v-checkbox class="ml-10"
                            label="Üyelik koşullarını ve kişisel verilerimin korunmasını kabul ediyorum."></v-checkbox>


                <v-btn type="submit" value="register" class="rounded-0" @click="register"
                       style="background-color:black; color:white"
                       width="450px">Üye Ol
                </v-btn>
                <!--                <div class="form-group">
                                  <label for="name">Your Name</label>
                                  <input type="text" v-model="name" class="form-control" id="name">
                                </div>
                                <div class="form-group">
                                  <label for="name">Your Name</label>
                                  <input type="email" v-model="email" class="form-control" id="email">
                                </div>
                                <div class="form-group">
                                  <label for="name">Your Name</label>
                                  <input type="password" v-model="password" class="form-control" id="password">
                                </div>
                                <div class="form-group">
                                  <button type="submit" class="form-control" @click="register">Kayıt Ol</button>
                                </div>-->


              </div>


            </v-card>
          </v-col>
        </v-row>

      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import {fb} from '../firebase'

export default {
  name: "Uyelik",
  props: {
    msg: String
  },
  data() {
    return {
      name: null,
      email: null,
      password: null
    }
  },
  methods: {
    register() {
      fb.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            alert('Kaydınız Başarıyla Tamamlandı');
          })
          .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/weak-password') {
                  alert('The password is too weak.');
                } else {
                  alert(errorMessage);
                }
                console.log(error);
              }
          );
    }
  }
}
</script>
