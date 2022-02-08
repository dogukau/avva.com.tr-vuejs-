<template>
  <v-carousel style="margin-top: 70px">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://avva.com.tr/Uploads/SayfaTasarim/Sayfa24/title-3b0cbbac-0.jpg',
          },
          {
            src: 'https://avva.com.tr/Uploads/SayfaTasarim/Sayfa24/title-4a1baa91-b.jpg',
          },
          {
            src: 'https://avva.com.tr/Uploads/SayfaTasarim/Sayfa24/title-af618571-7.jpg',
          },
          {
            src: 'https://avva.com.tr/Uploads/SayfaTasarim/Sayfa24/title-b54fc81b-e.jpg',
          },
          {
            src: 'https://avva.com.tr/Uploads/SayfaTasarim/Sayfa24/title-06aa65be-9.jpg',
          },
           {
            src: 'https://avva.com.tr/Uploads/SayfaTasarim/Sayfa24/title-6e076e8a-b.jpg',
          },
          {
            src: 'https://avva.com.tr/Uploads/SayfaTasarim/Sayfa24/title-a82e3f4b-7.jpg',
          },
        ],
      }
    },
  }
</script>
