<template>
    <v-card class="mx-auto">
        <vList>
            <v-list-item v-for="item in items" :key="item.id" :value="item.id">
                <p>{{ item.firstName }}</p>
                <a href=""></a>
            </v-list-item>
        </vList>
    </v-card>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const items = ref([]);

onMounted(async () => {

    let response = await fetch("/api/SuperTechnician");
    items.value = await response.json();
});
</script>