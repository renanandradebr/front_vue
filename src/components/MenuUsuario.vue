<template>
    <div class="text-center">
        <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x>
            <template v-slot:activator="{ on, attrs }">
                <v-list-item-avatar v-bind="attrs" v-on="on">
                    <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                </v-list-item-avatar>

            </template>

            <v-card>
                <v-list>
                    <v-list-item>
                        <v-list-item-avatar>
                            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>John Leider</v-list-item-title>
                            <v-list-item-subtitle>Founder of Vuetify</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>

                <v-divider></v-divider>

                <v-list>
                    <v-list-item>

                        <v-btn v-for="link in links" :key="link.name" text @click="goToRoute(link.route)">


                            <v-icon left>mdi-account</v-icon>
                            {{ link.name }}
                        </v-btn>

                    </v-list-item>
                </v-list>
                <v-divider horizontal></v-divider>
                <v-card-actions>

                    <v-btn text @click="logout">
                        Sair
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-menu>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            fav: true,
            menu: false,
            message: false,
            hints: true,
            links: [
                { name: 'Profile', route: './profile' },
            ],
        };
    },
    methods: {
        redirectToHome() {
            (this.$router as any).push('./home');
        },
        logout() {
            // Lógica para efetuar o logout
            // Redirecionar para a rota de login
            (this.$router as any).push('./');
        },
        goToRoute(route: string) {
            const selectedLink = this.links.find((item) => item.name === route);
            if (selectedLink) {
                (this.$router as any).push(selectedLink.route);
            }
        },
    },
});
</script>
