<template>
  <VDataTableServer
    v-model:items-per-page="itemsPerPage"
    v-model:page="page"
    :items-per-page-options="paginationOptions"
    :headers="headers"
    :items-length="totalItems"
    :items="superTechnicians"
    :loading="loading"
    class="elevation-1 ma-0 pa-0"
    item-value="name"
    @update:options="updateTable"
  >
    <template #top>
      <VToolbar
        title="Overmontører"
      >
        <VBtn
          color="info"
          variant="flat"
          prepend-icon="mdi-plus"
          text="Opret ny"
          @click="$router.push(encodeURI('/NyOvermontør'))"
        />
      </VToolbar>
    </template>

    <template #item.actions="{ item }">
      <VIcon
        size="small"
        class="me-2"
        @click="$router.push(encodeURI(`/Overmontører/${item.raw.id}`))"
      >
        mdi-pencil
      </VIcon>
      <VIcon
        size="small"
        @click="deleteAction(item.raw.id)"
      >
        mdi-delete
      </VIcon>
    </template>
  </VDataTableServer>
</template>

<script setup>
import { useSuperTechnicianStore } from '@/stores/SuperTechnician';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const store = useSuperTechnicianStore();
const { superTechnicians, count:totalItems } = storeToRefs(store);
const { getMany, deleteTechnician } = store;

//Table Config
const paginationOptions = [
   { value: 2, title: '2' },
   { value: 10, title: '10' },
   { value: 25, title: '25' },
   { value: 50, title: '50' },
  ]
const itemsPerPage = ref(10)
const page = ref(1)
const loading = ref(true)
const headers = ref([
    { title: 'Fornavn', key: 'firstName', align: 'end', sortable: false  },
    { title: 'Mellemnavn', key: 'middleName', align: 'end', sortable: false  },
    { title: 'Efternavn', key: 'lastName', align: 'end', sortable: false  },
    { title: 'Telefonnummer', key: 'phoneNumber', align: 'end', sortable: false  },
    { title: 'E-mail', key: 'email', align: 'end', sortable: false  },    
    { title: 'Handlinger', key: 'actions', align:'end', sortable: false },
  ])

async function deleteAction(id){
  deleteTechnician(id);
  updateTable({ page: page.value, itemsPerPage: itemsPerPage.value })
}


async function updateTable({ page, itemsPerPage }){
  loading.value = true;

  await getMany(page, itemsPerPage)

  loading.value = false;
}
</script>