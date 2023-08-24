<template>
  <VDataTable
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items-length="totalItems"
    :items="superTechnicians"
    :loading="loading"
    :search="search"
    class="elevation-1"
    item-value="name"
    @update:options="updateTable"
  >
    <template #item.actions="{item}" />
  </VDataTable>
</template>

<script setup>

import { useSuperTechnicianStore } from '@/stores/SuperTechnician';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const store = useSuperTechnicianStore();
const { superTechnicians } = storeToRefs(store);
const { getMany } = store;

//Table Config
const itemsPerPage = ref(5)
const search = ref('')
const loading = ref(true)
const totalItems = ref(0)
const headers = ref([
    { title: 'Fornavn', key: 'firstName', align: 'end' },
    { title: 'Mellemnavn', key: 'middleName', align: 'end' },
    { title: 'Efternavn', key: 'lastName', align: 'end' },
    { title: 'Telefonnummer', key: 'phoneNumber', align: 'end' },
    { title: 'E-mail', key: 'email', align: 'end' },
  ])

async function updateTable(){
  loading.value = true;
  await getMany()
  loading.value = false;
  
}


</script>