<template>
  <v-container>
    <h1>Cadastro de Usuário</h1>
    <v-form ref="form" @submit="registerUser">
      <v-text-field v-model="name" label="Nome" required></v-text-field>
      <v-text-field v-model="email" label="Email" required></v-text-field>
      <v-text-field v-model="password" label="Senha" type="password" required></v-text-field>
      <v-text-field v-model="confirmPassword" label="Confirmar Senha" type="password" required></v-text-field>
      <v-btn color="primary" @click="registerUser">Cadastrar</v-btn>
    </v-form>

  </v-container>
</template>

<script lang="ts">
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    registerUser() {
      // Lógica para cadastrar o usuário
      // Você pode uthissar o .name, this.email, this.password para obter os valores dos campos
      // e fazer a requisição para o backend para realizar o cadastro
    },
    loginUser() {
      // Lógica para fazer o login do usuário
      // Você pode usar o this.email, this.password para obter os valores dos campos
      // e fazer a requisição para o backend para realizar o login
    }
  }
};
</script>