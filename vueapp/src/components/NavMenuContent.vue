<template>
    <v-list nav density="compact">
        <v-list-item v-for="link in navLinks" :key="link.text" :to="link.route">
            <template v-slot:prepend>
                <v-icon>{{ link.icon }}</v-icon>
            </template>

            <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>


    </v-list>
</template>

<script setup>
import { useSiteStore } from '@/stores/Site';

const { navLinks } = useSiteStore();

</script>