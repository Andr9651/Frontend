<template>
    <TechnicianList :technicians="subTechnicians"></TechnicianList>
</template>

<script setup>
import TechnicianList from '@/components/TechnicianList.vue';
import { useSubTechnicianStore } from '@/stores/SubTechnician';

const { getMany, subTechnicians } = useSubTechnicianStore();
await getMany();
</script>