<template>
  <div class="w-full mx-auto mt-6 py-6 px-4 bg-dicePurple-400 shadow-lg rounded-md">
    <div class="overflow-auto hide-scrollbar w-full">
      <table class="h-auto w-full mb-32">
        <thead>
          <slot name="header" />
        </thead>
        <tbody>
          <slot name="body" />
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BaseTable',
  props: { Headings: Array },
  data () {
    return {

    }
  }
}

</script>
<style lang="css" scoped>
</style>
