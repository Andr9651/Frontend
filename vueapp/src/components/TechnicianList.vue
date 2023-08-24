<template>
  <VSheet class="mx-auto">
    <VList>
      <VListItem
        v-for="technician in props.technicians"
        :key="technician.id"
        class="p-3 ma-1"
        :value="technician.id"
        color="primary"
        @click="$emit('onSelect', technician)"
      >
        <VContainer>
          <VRow class="align-center">
            <VCol cols="5">
              <span class="mr-1">{{ technician.firstName }} </span>
              <span
                v-if="technician.middleName != null"
                class="mr-1"
              >{{ technician.middleName }}</span>
              <span class="mr-1">{{ technician.lastName }}</span>
            </VCol>
            <VDivider vertical />
            <VCol>
              <span class="">{{ technician.phoneNumber }}</span>
            </VCol>
            <VDivider vertical />
            <VCol>
              <span>{{ technician.email }}</span>
            </VCol>
          </VRow>
        </VContainer>
      </VListItem>
    </VList>
  </VSheet>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(['technicians'])

defineEmits(['onSelect'])
</script>