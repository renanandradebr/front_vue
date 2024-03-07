<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4" v-for="button in buttons" :key="button.id" class="text-center">
        <div class="d-flex flex-column align-center">
          <v-btn :color="button.color" outlined large @click="goToRoute(button.route)">
            <v-icon left>{{ button.icon }}</v-icon>
            {{ button.label }}
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="js">
export default {
  data() {
    return {
      buttons: [
        { id: 1, label: 'Cadastro de Usuário', color: 'primary', route: '/cadastro', icon: 'mdi-account' },
        { id: 2, label: 'Cadastro de Telefone Fixo', color: 'primary', route: '/cadastro-fixo', icon: 'mdi-phone' },
        { id: 3, label: 'Cadastro de Celular', color: 'primary', route: '/cadastro-celular', icon: 'mdi-cellphone' },
        { id: 4, label: 'Agenda Telefônica', color: 'primary', route: '/agenda', icon: 'mdi-book' },
        { id: 5, label: 'Solicitar Backup', color: 'primary', route: '/solicitar-backup', icon: 'mdi-cloud-upload' },
        { id: 6, label: 'Acessar Logs de Usuário', color: 'primary', route: '/logs', icon: 'mdi-history' },
      ],
    };
  },
  methods: {
    goToRoute(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
.menu-button {
  font-family: 'Sora', sans-serif;
}
</style>
