<template>
    <TechnicianForm :technician="tempTechnician">
        <template v-slot:save>
            <v-btn @click="save" :disabled="!changed" class="mr-3" color="success"
                prepend-icon="mdi-content-save">Gem</v-btn>
        </template>
        <template v-slot:cancel>
            <v-btn @click="cancel" class="mr-3" color="error" prepend-icon="mdi-cancel">Annuller</v-btn>

        </template>
        <template v-slot:delete>
            <v-btn v-if="tempTechnician.id != null" color="warning" prepend-icon="mdi-delete">Slet</v-btn>
        </template>

    </TechnicianForm>
</template>

<script setup>
import TechnicianForm from '../TechnicianForm.vue';
import { useSuperTechnicianStore } from '@/stores/SuperTechnician';
import { storeToRefs } from 'pinia';
import { defineProps, ref, watch } from 'vue';
import router from '../../router';

const props = defineProps(['id'])

const store = useSuperTechnicianStore();

const { currentlySelected } = storeToRefs(store);
const { getSingle, update } = store;
await getSingle(props.id);

const tempTechnician = ref(JSON.parse(JSON.stringify(currentlySelected.value)))

const changed = ref(false)

watch(tempTechnician.value, () => changed.value = true)

async function save() {
    console.log('saved')
    changed.value = false;
    const success = await update(tempTechnician.value);
    console.log(success)
}

function cancel() {
    router.push(encodeURI('/Overmontører'))
    currentlySelected.value = null;
}

</script>