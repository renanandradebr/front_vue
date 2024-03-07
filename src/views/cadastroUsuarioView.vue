<template>
  <v-container fluid class="fundo">
   <v-div>
    <HeaderOpções />
   </v-div> 
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6" class="botoes3">
        <v-card id="formulario1">
          <v-card-title class="text-center">Cadastro de Usuário</v-card-title>
          <v-card-text>
            <v-form @submit="submit" ref="form">
              <v-row>
                <v-col cols="6" md="6">
                  <v-text-field v-model="nome" label="Usuário" required outlined clearable></v-text-field>
                </v-col>
                <v-col cols="6" md="6">
                  <v-text-field v-model="cargo" label="Cargo" required outlined clearable></v-text-field>
                </v-col>
                <v-col cols="6" md="6">
                  <v-text-field v-model="lotacao" label="Lotação" required outlined clearable></v-text-field>
                </v-col>
                <v-col cols="6" md="6">
                  <v-text-field v-model="funcao" label="Função" required outlined clearable></v-text-field>
                </v-col>
                <v-col cols="6" md="6">
                  <v-text-field v-model="setor" label="Setor" required outlined clearable></v-text-field>
                </v-col>
                <v-col cols="6" md="6">
                  <v-text-field v-model="telefone" label="Telefone" required outlined clearable></v-text-field>
                </v-col>
              </v-row>

              <v-checkbox v-model="termos" label="Li e concordo com os termos e condições" required></v-checkbox>
              <v-btn type="submit" color="primary" class="mr-4">Salvar</v-btn>
              <v-btn color="error" @click="goBack">Voltar</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HeaderOpções from '../components/HeaderOpções.vue'

export default {
  components: {
    HeaderOpções,
  },
  data() {
    return {
      nome: "",
      cargo: "",
      lotacao: "",
      funcao: "",
      setor: "",
      telefone: "",
      termos: false,
    };
  },
  methods: {
    submit() {
      console.log("Formulário enviado!");
    },
    goBack() {
      this.$router.push("./home");
    },
  },
};
</script>

<style>
#formulario1 {
  border: solid rgb(7, 88, 134) 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.botoes3 {
  font-weight: bold;
  font-size: 15pt;
}
</style>