<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class LoginComponent extends Vue {
  username = '';
  password = '';

  async login() {
    try {
      const response = await axios.post('/api/login', {
        username: this.username,
        password: this.password
      });
      console.log(response.data);
      // Redirecionar ou fazer algo com a resposta do backend após o login bem-sucedido
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      // Exibir mensagem de erro para o usuário
    }
  }
}
</script>
