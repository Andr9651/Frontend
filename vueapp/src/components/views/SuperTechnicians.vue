<template>
    <TechnicianList :technicians="superTechnicians" @onSelect="handleListSelect"></TechnicianList>
    <v-dialog v-model="edit" width="w-auto">


        <v-card>
            <TechnicianForm :technician="currentlySelected" :relatedTechnicians="superTechnicians" title="Overmontør"
                relatedTitle="Undermontører"></TechnicianForm>
        </v-card>
    </v-dialog>
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