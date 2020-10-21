<template>
  <div class="w-full mx-auto">
    <div class="w-8/12 mx-auto mt-16">
      <div class="bg-dicePurple-300 flex justify-between p-2 ">
        <p class="text-gray-500 font-semibold">Dice Roll</p>
        <p class="text-gray-500">Max Wager</p>
      </div>
      <div class="flex">
        <div class="h-82 bg-dicePurple-400 w-4/12"></div>
        <div class="bg-transparent px-6 w-8/12">
          <dice-game></dice-game>
        </div>
      </div>
      <div class="bg-dicePurple-300 flex justify-between p-2">
        <p class="text-gray-500 font-semibold">Dice Roll</p>
        <p class="text-gray-500">Max Wager</p>
      </div>
    </div>
  </div>
</template>
<script>
import DiceGame from '@/components/Games/DiceGame.vue'
export default {
  components: { DiceGame },
  data: () => ({
    testData: null
  })
}

</script>
<style>
</style>
