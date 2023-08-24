<template>
  <TechnicianForm
    :technician="tempTechnician"
    related-title="Undermontører"
    :related-technicians="subTechnicians"
  >
    <template #save>
      <VBtn
        :disabled="!changed"
        class="mr-3"
        color="success"
        prepend-icon="mdi-content-save"
        @click="saveChanges"
      >
        {{ isUpdating ? 'Gem' : 'Opret' }}
      </VBtn>
    </template>
    <template #cancel>
      <VBtn
        class="mr-3"
        color="error"
        prepend-icon="mdi-cancel"
        @click="cancel"
      >
        Annuller
      </VBtn>
    </template>
  </TechnicianForm>
</template>

<script setup>
import TechnicianForm from '@/components/TechnicianForm.vue';
import { useSuperTechnicianStore } from '@/stores/SuperTechnician';
import { storeToRefs } from 'pinia';
import { defineProps, ref, watch } from 'vue';
import router from '../../router';

//'id' comes from the query parameters
const props = defineProps(['id'])

const isUpdating = ref(!isNaN(props.id));

const store = useSuperTechnicianStore();
const { currentlySelected, subTechnicians } = storeToRefs(store);
const { getSingle, create, update, resetCurrentlySelected, getSubTechnicians } = store;

if (isUpdating.value) {
  await getSingle(props.id);
  await getSubTechnicians(props.id, 0,20);
} else {
  resetCurrentlySelected();
}

const tempTechnician = ref(JSON.parse(JSON.stringify(currentlySelected.value)))

const changed = ref(false)

watch(tempTechnician.value, () => changed.value = true)

async function saveChanges() {
  console.log('saved')
  changed.value = false;
  if (isUpdating.value) {
    await update(tempTechnician.value);
  } else {
    await create(tempTechnician.value);
  }
  router.push(encodeURI('/Overmontører'))
}

function cancel() {
  router.push(encodeURI('/Overmontører'))
}

</script>