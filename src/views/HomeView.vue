<template>
  <v-app>
    <v-container>

      <header-p />



      <v-row>
        <v-col cols="12">
          <home-page />
        </v-col>
      </v-row>
      <footerV />
    </v-container>
  </v-app>
</template>


<script lang="ts">
import Vue from 'vue'
import HomePage from '../components/HomePage.vue'
import HeaderP from '../components/HeaderPrincipal.vue'
import footerV from '../components/FooterVue.vue'
export default Vue.extend({

  components: {
    footerV,
    HomePage,
    HeaderP,
  },
  name: 'home-view',

  data() {

    return {
      user: 'Renan Andrade',

      searchInput: '',
      links: [
        { name: 'Página Inicial', route: '/home' },
        { name: 'Ajuda', route: '/help' },
      ],
    }
  },
  methods: {

    logout() {
      // Lógica para efetuar o logout
      // Redirecionar para a rota de login
      this.$router.push('./');
    },
    goToRoute(route: string) {
      const selectedLink = this.links.find((item: any) => item.name === route);
      if (selectedLink) {
        this.$router.push(selectedLink.route);
      }
    }
  }




})
</script>

<style scoped>
.title {
  font-family: 'Sora', sans-serif;
}

.menu-item {
  font-family: 'Sora', sans-serif;
}

.mp-10 {
  margin-top: 10px;
}
</style>
