<template>
  <div class="text-h6">
    {{ props.message }}
  </div>
</template>

<script setup>
const props = defineProps({message:String})


</script>