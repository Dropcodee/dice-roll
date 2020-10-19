<template>
  <div class="home">
    <section class="w-11/12">
    </section>
    <section class="w-10/12 mx-auto">
      <div class="">
        <wagers-table></wagers-table>
      </div>
    </section>
  </div>
</template>
<script>
import WagersTable from '@/components/Layouts/Tables/WagersTable'
export default {
  name: 'Home',
  components: { WagersTable }
}

</script>
