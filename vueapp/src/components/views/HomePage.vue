<template>
  <div class="text-h2">
    Velkommen til Montør Manager
  </div>
  <HomeGreeting :message="new Date(Date.now()).toLocaleString('da-DK')" />
</template>

<script setup>
import HomeGreeting from '../HomeGreeting.vue'

</script>