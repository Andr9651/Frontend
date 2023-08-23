<template>
    <VCard class="mx-auto">
        <VList>
            <VListItem class="p-3" v-for="technician in props.technicians" :key="technician.id" :value="technician.id">
                <VContainer>
                    <VRow>
                        <VCol cols="5">
                            <span class="mr-1">{{ technician.firstName }} </span>
                            <span class="mr-1" v-if="technician.middleName != null">{{ technician.middleName }}</span>
                            <span class="mr-1">{{ technician.lastName }}</span>
                        </VCol>
                        <VCol>
                            <span>{{ technician.phoneNumber }}</span>
                        </VCol>
                        <VCol>
                            <span>{{ technician.email }}</span>
                        </VCol>
                    </VRow>
                </VContainer>

            </VListItem>
        </VList>
    </VCard>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(['technicians'])
</script>