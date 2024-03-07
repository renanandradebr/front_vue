<template>
    <v-container class="fill-height">
      <HeaderV />
      <v-row justify="center">
        <v-col cols="12" md="4" sm="8">
          <v-card class="cardlogin elevation-12">
            <v-toolbar color="white" dark flat>
              <v-col cols="12" class="text-center">
                <v-img src="../assets/logo-scct.png" contain width="150" class="logo-img" />
              </v-col>
            </v-toolbar>
            <v-card-text>
              <v-form @submit.prevent="login">
                <v-text-field v-model="username" label="Nome de Usuário" outlined clearable></v-text-field>
                <v-text-field v-model="password" label="Senha" type="password" outlined clearable></v-text-field>
                <v-checkbox v-model="lembrarLogin" label="Manter-me Conectado"></v-checkbox>
                <v-btn class="botaologin" type="submit" color="blue" text-color="white" block>Acessar</v-btn>
                <v-spacer></v-spacer>
                <div class="text-center">
                  <a href="/esqueceu-senha">Esqueci a senha</a>
                </div>
                <div class="text-center">
                  <v-btn class="cadastro" color="green" small @click="paginaCadastro">Cadastre-se aqui</v-btn>
                </div>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <footerV/>
    </v-container>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import HeaderV from '../components/HeaderLogin.vue';
  import footerV from '../components/FooterVue.vue'
  
  export default defineComponent({
    components: {
      HeaderV,
      footerV,
    },
  
    data() {
      return {
        username: '',
        password: '',
        lembrarLogin: false,
      };
    },
    methods: {
      paginaCadastro() {
        this.$router.push('/cadastro-login');
      },
      login() {
        // Verifique as credenciais aqui (por exemplo, com uma API)
        if (this.username === 'admin' && this.password === 'password123') {
          // Armazene a autenticação como true no LocalStorage
          localStorage.setItem('autenticado', 'true');
          localStorage.setItem('lembrarLogin', this.lembrarLogin.toString());
          // Redirecione para a página inicial
          this.$router.push('/home');
        } else {
          alert('Credenciais inválidas. Tente novamente.');
        }
      },
    },
    created() {
      // Carrega o valor da flag de lembrar login do localStorage
      const lembrarLogin = localStorage.getItem('lembrarLogin');
      if (lembrarLogin && lembrarLogin === 'true') {
        this.lembrarLogin = true;
      }
    },
  });
  </script>
  
  <style scoped>
  .logo-img {
    margin: 0 auto;
    /* Centraliza horizontalmente */
  }
  
  .cardlogin {
    border: solid rgb(54, 54, 216) 2px;
    padding: 16px;
    margin-top: 16px;
  }
  
  .botaologin {
    font-size: 14px;
    font-weight: bold;
    color: white;
    margin-top: 16px;
  }
  
  .cadastro {
    font-size: 12px;
    font-weight: normal;
    color: white;
    margin-top: 10px;
  }
  
  .text-center {
    text-align: center;
  }
  </style>
  