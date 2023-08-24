<template>
  <VForm class="pa-5">
    <VTextField
      v-model="technician.firstName"
      :rules="firstNameRules"
      label="Fornavn"
    />

    <VTextField
      v-model="technician.middleName"
      :rules="middleNameRules"
      label="Mellemnavn"
    />
    <VTextField
      v-model="technician.lastName"
      :rules="lastNameRules"
      label="Efternavn"
    />

    <VTextField
      v-model="technician.phoneNumber"
      :rules="phoneNumberRules"
      label="Telefon nummer"
      required
    />
    <VTextField
      v-model="technician.email"
      :rules="emailRules"
      label="E-mail"
    />

    <div class="text-h6">
      {{ relatedTitle }}
    </div>

    <VSheet
      class="ma-5 fill-height"
      border
      rounded
    >
      <TechnicianList
        class
        :technicians="relatedTechnicians"
      />
    </VSheet> 
    <slot name="save" />
    <slot name="cancel" />
    <slot name="delete" />
  </VForm>
</template>

<script setup>
import TechnicianList from '@/components/TechnicianList.vue';
import { toRefs } from 'vue';

const props = defineProps(['technician', 'relatedTechnicians', 'relatedTitle'])
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