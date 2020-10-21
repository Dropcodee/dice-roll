<template>
  <div>
    <game-component></game-component>
  </div>
</template>
<script>
import GameComponent from '@/components/Layouts/Game'
export default {
  components: { GameComponent },
  name: 'Games',
  data: () => ({
    gameOptions: null
  })
}
</script>
<style lang="css" scoped>
</style>
