<template>
  <div>
    <div class="bg-transparent mt-24">
      <nav class="flex flex-col sm:flex-row">
        <button class="tablinks text-cowtribeGreen-100 py-4 px-6 hover:text-cowtribeGreen-100 focus:outline-none text-gray-600 font-medium" v-for="(tab, index) in tabs" :key="index" :class="
              currentTab === tab.component
                ? 'border-b-2 border-yellow-500 text-yellow-500'
                : ''
            " @click="currentTab = tab.component">
          <span v-if="tab.name == 'All'" class="flex items-center">{{ tab.name }}
            <div class="rounded-full py-0 ml-1 flex items-center mx-auto text-center px-2 shadow-sm bg-cowtribeGreen-200">
            </div>
          </span>
          <span v-if="tab.name == 'Winnings'" class="flex items-center">
            {{ tab.name }}
            <div class="rounded-full py-0 ml-1 flex items-center mx-auto text-center px-2 shadow-sm bg-cowtribeGreen-200">
            </div>
          </span>
            <span v-if="tab.name == 'Losses'" class="flex items-center">
            {{ tab.name }}
            <div class="rounded-full py-0 ml-1 flex items-center mx-auto text-center px-2 shadow-sm bg-cowtribeGreen-200">
            </div>
          </span>
        </button>
      </nav>
    </div>
    <keep-alive>
      <component v-bind:is="currentTab"></component>
    </keep-alive>
  </div>
</template>
<script>
import WinningsTable from '@/components/Layouts/Tables/WinningsTable'
import LosingsTable from '@/components/Layouts/Tables/LosingsTable'
import AllWagersTable from '@/components/Layouts/Tables/AllWagersTable'
export default {
  name: 'WagersTable',
  components: { WinningsTable, LosingsTable, AllWagersTable },
  data () {
    return {
      currentTab: 'WinningsTable',
      tabs: [
        { name: 'All', component: 'AllWagersTable' },
        { name: 'Winnings', component: 'WinningsTable' },
        { name: 'Losses', component: 'LosingsTable' }
      ]
    }
  }
}

</script>
<style lang="css" scoped>
</style>
