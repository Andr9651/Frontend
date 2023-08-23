<template>
    <v-form class="pa-5">
        <h2>{{ title }}</h2>

        <v-text-field v-model="tempTechnician.firstName" :rules="firstNameRules" label="Fornavn"></v-text-field>

        <v-text-field v-model="tempTechnician.middleName" :rules="middleNameRules" label="Mellemnavn"></v-text-field>
        <v-text-field v-model="tempTechnician.lastName" :rules="lastNameRules" label="Efternavn"></v-text-field>

        <v-text-field v-model="tempTechnician.phoneNumber" :rules="phoneNumberRules" label="Telefon nummer"
            required></v-text-field>
        <v-text-field v-model="tempTechnician.email" :rules="emailRules" label="E-mail"></v-text-field>

        <h3>{{ relatedTitle }}</h3>
        <v-sheet class="ma-5 fill-height" border rounded>
            <TechnicianList class :technicians="relatedTechnicians"></TechnicianList>
        </v-sheet>

        <v-btn :disabled="!changed" class="mr-3" color="success" prepend-icon="mdi-content-save">Gem</v-btn>

        <v-btn class="mr-3" color="error" prepend-icon="mdi-cancel">Annuller</v-btn>

        <v-btn v-if="tempTechnician.id != null" color="warning" prepend-icon="mdi-delete">Slet</v-btn>

    </v-form>
</template>

<script setup>
import TechnicianList from '@/components/TechnicianList.vue';
import { ref, toRefs, watch } from 'vue';

const props = defineProps(['technician', 'relatedTechnicians', 'title', 'relatedTitle'])
const { technician, relatedTechnicians } = toRefs(props)

const tempTechnician = ref(JSON.parse(JSON.stringify(technician.value)))

const changed = ref(false)

watch(tempTechnician.value, () => changed.value = true)

function saveTechnician() {

}

function cancel() {

}

function deleteTechnician() {

}



function required(fieldName) {
    return (value) => {
        if (value) return true

        return fieldName + ' er krævet.'
    }
}

const firstNameRules = [
    required('Fornavn')
]

const middleNameRules = []

const lastNameRules = [
    required('Efternavn')
]

const phoneNumberRules = [
    required('Telefonnummer')
]

const emailRules = [
    required('E-mail')
]

</script>