<template>
  <v-toolbar color="primary" :prominent="$vuetify.breakpoint.mdAndUp" flat>
    <v-container>
      <v-row :align="$vuetify.breakpoint.mdAndUp ? 'center' : 'start'" :justify="$vuetify.breakpoint.mdAndUp ? 'start' : 'space-between'">
        <v-col cols="12" md="3">
          <v-toolbar-title class="title">
            <v-img src="..\src\assets\logo-scct2.png" transition="scale-transition" width="400" />
          </v-toolbar-title>
        </v-col>

        <v-col cols="12" md="9">
          <v-row :align="$vuetify.breakpoint.mdAndUp ? 'center' : 'end'" :justify="$vuetify.breakpoint.mdAndUp ? 'end' : 'space-between'">
            <v-col cols="auto">
              <v-divider v-if="$vuetify.breakpoint.mdAndUp" class="mx-4" vertical></v-divider>
            </v-col>

            <v-col cols="auto" class="py-0">
              <v-user @click="goToRoute('/profile')">
                <Menuser />
              </v-user>
            </v-col>

            <v-col cols="auto">
              <v-divider v-if="$vuetify.breakpoint.mdAndUp" class="mx-4" vertical></v-divider>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-toolbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Menuser from '../components/MenuUsuario.vue';

export default defineComponent({
  components: {
    Menuser,
  },
  name: 'HeaderScct',
  data() {
    return {
      links: [
        { name: 'Página Inicial', route: '/home' },
        { name: 'Ajuda', route: '/help' },
      ] as { name: string; route: string }[],
    };
  },
  methods: {
    goToRoute(route: string): void {
      const selectedLink = this.links.find((item: { route: string }) => item.route === route);
      if (selectedLink) {
        (this.$router as any).push(selectedLink.route);
      }
    },
  },
});
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
