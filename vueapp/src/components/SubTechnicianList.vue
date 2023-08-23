<template>
    <v-card class="mx-auto">
        <vList>
            <v-list-item v-for="item in subTechnicians" :key="item.id" :value="item.id">
                <p>{{ item.firstName }}</p>
                <a href=""></a>
            </v-list-item>
        </vList>
    </v-card>
</template>

<script setup>
import { useSubTechnicianStore } from '@/stores/SubTechnician';

const { getMany, subTechnicians } = useSubTechnicianStore();
await getMany();
</script>