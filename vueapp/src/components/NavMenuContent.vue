<template>
  <VList
    nav
    density="compact"
  >
    <VListItem
      v-for="link in navLinks"
      :key="link.text"
      :to="link.route"
    >
      <template #prepend>
        <VIcon>{{ link.icon }}</VIcon>
      </template>

      <VListItemTitle>{{ link.text }}</VListItemTitle>
    </VListItem>
  </VList>
</template>

<script setup>
import { useSiteStore } from '@/stores/Site';

const { navLinks } = useSiteStore();

</script>