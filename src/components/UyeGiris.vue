<template>
  <v-app>
    <v-content>
      <v-container class="fill-height about" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="12" align="center">
            <v-card class="elevation-12" color="#FFFFF" height="900px" width="700px">
              <div align="center">
                <h1 align="center" class="black--text text-sm-left ml-5 mb-5 mt-5">
                  Üye Girişi
                </h1>
                <form @submit.prevent="Login">
                  <v-text-field v-model="email" type="email" dense class="rounded-0 ml-5 mr-5" outlined label="E-posta" ></v-text-field>
                  <v-text-field v-model="password" type="password" dense class="rounded-0 ml-5 mr-5" outlined label="Şifre" ></v-text-field>
                  <v-btn @click="login" type="submit" v-model="Login" value="Login" class="rounded-0" style="background-color: black; color: white" width="650px">Giriş Yap
                  </v-btn>
                </form>
                <div style="margin-left: 400px" class="d-flex flex-row">
                  <label style="width: 150px"></label>

                  <v-btn
                      small
                      class="font-weight-light text-decoration-underline mt-5"
                      text
                  >
                    Şifremi Unuttum
                  </v-btn
                  >
                </div>
                <v-btn
                    class="rounded-0"
                    style="background-color: white; color: black"
                    width="650px"
                >Henüz üye değil misin? Üye Ol
                </v-btn
                >
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
  name: "UyeGiris",
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
    login() {
      fb.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            alert('Başarıyla Giriş Yaptınız');
            this.$router.replace('/')
          })
          .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
              alert('Şifreniz Yanlış.');
            } else {
              alert(errorMessage);
            }
            console.log(error);
          });

    }
  }
}
</script>
