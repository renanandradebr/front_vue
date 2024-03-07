<template>
  <v-app>
    <v-row>
      <v-col>
        <v-main>
          <v-container>
            <v-row>
              <router-view />
            </v-row>
          </v-container>
        </v-main>
      </v-col>
    </v-row>
   
  </v-app>
</template>
<script lang="ts">
export default {
  name: 'App',

  data() {

    return {
      drawer: false,
    }
  },
};
</script>
