<template>
  <VApp>
    <VAppBar>
      <VAppBarNavIcon @click.stop="drawer = !drawer" />
      <VAppBarTitle color="primary">
        <span>{{ $router.currentRoute.value.name }}</span>
      </VAppBarTitle>
      <VBtn
        icon="mdi-circle-half-full"
        @click="toggleTheme"
      />
    </VAppBar>
    <VNavigationDrawer v-model="drawer">
      <NavMenuContent />
    </VNavigationDrawer>
    <VMain>
      <Suspense>
        <RouterView />
      </Suspense>
    </VMain>
  </VApp>
</template>

<script setup>
import NavMenuContent from './components/NavMenuContent.vue'
import { useTheme } from 'vuetify'
import { ref } from 'vue'
const drawer = ref(false)

const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

</script>
