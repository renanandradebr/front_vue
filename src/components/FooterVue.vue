<template>
  <v-footer color="primary" fixed >

    <v-row align="center" justify="center">
      <v-col cols="6" class="text-center">
        <span class="footer-text">
          &copy; {{ new Date().getFullYear() }} — Companhia de Saneamento Ambiental do Maranhão - CAEMA
        </span>
      </v-col>
      
    </v-row>

  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Sora&display=swap');

.footer-text {
  font-family: 'Sora', sans-serif;
  font-size: 12px;
  color: white;
}
</style>