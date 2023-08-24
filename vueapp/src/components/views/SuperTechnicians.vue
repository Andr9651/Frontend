<template>
  <TechnicianList
    :technicians="superTechnicians"
    @on-select="handleListSelect"
  />
  <VDialog
    v-model="edit"
    width="w-auto"
  >
    <VCard>
      <TechnicianForm
        :technician="currentlySelected"
        :related-technicians="superTechnicians"
        title="Overmontør"
        related-title="Undermontører"
      />
    </VCard>
  </VDialog>
</template>

<script setup>
import TechnicianList from '@/components/TechnicianList.vue';
import TechnicianForm from '@/components/TechnicianForm.vue';
import { useSuperTechnicianStore } from '@/stores/SuperTechnician';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
const store = useSuperTechnicianStore();
const { superTechnicians, currentlySelected } = storeToRefs(store);
const { getMany } = store;

await getMany();

const edit = ref(false)

function handleListSelect(objectEmitted) {
  currentlySelected.value = objectEmitted
  console.log(currentlySelected.value)
  edit.value = !edit.value
}


</script>