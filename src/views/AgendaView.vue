<template>
    <v-container>
        <AgendaTel />
        <footerV />
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderOp from '../components/HeaderOpções.vue';
import footerV from '../components/FooterVue.vue'
import AgendaTel from '../components/agendaTelefonica.vue'

export default defineComponent({
    components: {
        HeaderOp,
        footerV,
        AgendaTel,
    },
});
</script>