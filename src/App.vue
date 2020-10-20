<template>
  <div id="app">
    <header>
      <navbar-component />
    </header>
    <main class="bg-root">
      <router-view />
    </main>
  </div>
</template>
<script>
import NavbarComponent from '@/components/Layouts/NavbarComponent'
export default {
  components: { NavbarComponent }
}
</script>
<style lang="scss">
</style>
