<template>
    <v-toolbar color='grey' flat >

        <v-row justify="center">
            <v-col cols="12">
                <v-spacer></v-spacer>
                <v-btn text @click="goToRoute('home')">
                    Inicio
                </v-btn>
                <v-btn text @click="goToRoute('acesso-negado')">
                    Ajuda
                </v-btn>
            </v-col>

        </v-row>
    </v-toolbar>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

    data() {
        return {
            links: [
                { name: 'Inicio', route: './home' },
                { name: 'Ajuda', route: './help' },
            ],
        };
    },
    methods: {
        goToRoute(route: string) {
            this.$router.push(route);
        },

    },
});
</script>
