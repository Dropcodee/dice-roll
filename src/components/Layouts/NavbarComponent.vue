<template>
  <div>
    <div class="w-full">
      <div class="p-4 w-full bg-dicePurple-100 flex justify-end hidden lg:flex">
        <div class="container mx-auto">
        <p class="text-gray-400 mr-8 float-right text-sm">Wagers All Time <span class="text-yellow-500">234,455</span></p>
        </div>
      </div>
      <div class="w-full bg-dicePurple-200 shadow py-4 px-6">
        <div class="flex items-center container mx-auto justify-between">
          <div> <p class="text-yellow-500 text-semibold">LOGO</p></div>
          <div class="justify-between">
            <button class="px-3 py-2 mx-1 text-sm text-yellow-500 rounded border border-yellow-500 focus:outline-none hover:bg-opacity-25 hover:bg-gray-100 hover:border-yellow-400 ease-in-out duration-500 transition">Login</button>
            <button class="px-3 py-2 mx-2 text-sm text-dicePurple-200 rounded border bg-yellow-500 focus:outline-none hover:bg-yellow-400 border-transparent ease-in-out duration-500 transition">Register</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

  name: 'NavbarComponent',

  data () {
    return {

    }
  }
}

</script>

<style lang="scss" scoped>
</style>
