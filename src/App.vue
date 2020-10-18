<template>
  <div id="app">
    <header>
      <navbar-component />
    </header>
    <main class="bg-root">
      <div class="overlay"><router-view /></div>
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
.bg-root {
  position: relative;
  background-image: url("https://images.hdqwalls.com/wallpapers/abstract-vector-design-a8.jpg") !important;
  height: 100vh;
  width: 100%;
}

.overlay {
  position: absolute;
  background: rgba(25, 27, 54, 0.95);
  height: 100vh;
  width: 100%;
}
</style>
