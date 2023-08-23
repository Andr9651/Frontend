<template>
    <TechnicianList :technicians="superTechnicians"></TechnicianList>
</template>

<script setup>
import TechnicianList from '@/components/TechnicianList.vue';
import { useSuperTechnicianStore } from '@/stores/SuperTechnician';

const { getMany, superTechnicians } = useSuperTechnicianStore();
await getMany();
</script>