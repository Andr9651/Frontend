<template>
    <v-form class="pa-5">
        <h2>{{ title }}</h2>

        <v-text-field v-model="technician.firstName" :rules="firstNameRules" label="Fornavn"></v-text-field>

        <v-text-field v-model="technician.middleName" :rules="middleNameRules" label="Mellemnavn"></v-text-field>
        <v-text-field v-model="technician.lastName" :rules="lastNameRules" label="Efternavn"></v-text-field>

        <v-text-field v-model="technician.phoneNumber" :rules="phoneNumberRules" label="Telefon nummer"
            required></v-text-field>
        <v-text-field v-model="technician.email" :rules="emailRules" label="E-mail"></v-text-field>

        <h3>{{ relatedTitle }}</h3>
        <v-sheet class="ma-5 fill-height" border rounded>
            <TechnicianList class :technicians="relatedTechnicians"></TechnicianList>
        </v-sheet>
        <slot name="save" />
        <slot name="cancel" />
        <slot name="delete" />
    </v-form>
</template>

<script setup>
import TechnicianList from '@/components/TechnicianList.vue';
import { toRefs } from 'vue';

const props = defineProps(['technician', 'relatedTechnicians', 'title', 'relatedTitle'])
const { technician, relatedTechnicians } = toRefs(props)

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