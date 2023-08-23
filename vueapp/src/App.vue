<template>
  <vApp>
    <vAppBar>
      <vAppBarNavIcon @click.stop="drawer = !drawer" />
      <vAppBarTitle color="primary">
        <span>TechnicianManager</span>
      </vAppBarTitle>
    </vAppBar>
    <VNavigationDrawer v-model="drawer">
      <NavMenuContent></NavMenuContent>
    </VNavigationDrawer>
    <vMain>
      <Suspense>
        <routerView />
      </Suspense>

    </vMain>
  </vApp>
</template>

<script setup>
import NavMenuContent from './components/NavMenuContent.vue'
import { ref } from 'vue'
const drawer = ref(false)

</script>
