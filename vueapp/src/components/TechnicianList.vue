<template>
	<VSheet class="mx-auto">
		<VList>
			<VListItem class="p-3 ma-1" v-for="technician in props.technicians" :key="technician.id" :value="technician.id"
				@click="$emit('onSelect', technician)" color="primary">

				<VContainer>
					<VRow class="align-center">
						<VCol cols="5">
							<span class="mr-1">{{ technician.firstName }} </span>
							<span class="mr-1" v-if="technician.middleName != null">{{ technician.middleName }}</span>
							<span class="mr-1">{{ technician.lastName }}</span>
						</VCol>
						<v-divider vertical></v-divider>
						<VCol>
							<span class="">{{ technician.phoneNumber }}</span>
						</VCol>
						<v-divider vertical></v-divider>
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