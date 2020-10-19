<template>
   <div>
    <dice-table :headings="headings">
      <template v-slot:header>
        <tr>
          <th v-for="(header, index) in headings" :key="index" class="px-10 py-6 text-left text-xs leading-4 font-semibold text-gray-600 uppercase tracking-wider bg-dicePurple-300">
            {{ header.text }}
          </th>
        </tr>
      </template>
      <template v-slot:body>
        <tr>
          <td class="px-10 text-left py-4 whitespace-no-wrap border-b border-gray-200 text-gray-700 font-semibold">
            Dice
          </td>
          <td class="px-10 text-left py-4 whitespace-no-wrap border-b border-gray-200 font-semibold text-gray-200">
            Monkey Ninja
          </td>
          <td class="px-10 text-left py-4 whitespace-no-wrap border-b border-gray-200 font-semibold text-gray-700">
            9:11pm
          </td>
          <td class="px-10 text-left py-4 whitespace-no-wrap border-b border-gray-200 font-semibold text-green-600">
            N20,000
          </td>
          <td class="px-10 text-left py-4 whitespace-no-wrap border-b border-gray-200 font-semibold text-green-600">
            1.6x
          </td>
          <td class="px-10 text-left py-4 whitespace-no-wrap border-b border-gray-200 text-red-600 font-semibold">
            N00,000
          </td>
        </tr>
        <tr>
          <td class="px-10 text-left py-4 whitespace-no-wrap border-b border-gray-200 text-gray-700 font-semibold">
            Dice
          </td>
          <td class="px-10 text-left py-4 whitespace-no-wrap border-b border-gray-200 font-semibold text-gray-200">
            Ninja Ranger
          </td>
          <td class="px-10 text-left py-4 whitespace-no-wrap border-b border-gray-200 font-semibold text-gray-700">
            9:14pm
          </td>
          <td class="px-10 text-left py-4 whitespace-no-wrap border-b border-gray-200 font-semibold text-green-600">
            N50,000
          </td>
          <td class="px-10 text-left py-4 whitespace-no-wrap border-b border-gray-200 font-semibold text-gray-700">
            0.00x
          </td>
          <td class="px-10 text-left py-4 whitespace-no-wrap border-b border-gray-200 text-red-600 font-semibold">
            N00,000
          </td>
        </tr>
      </template>
    </dice-table>
  </div>
</template>
<script>
export default {

  name: 'LosingsTable',

  data () {
    return {
      headings: [{ text: 'Game' }, { text: 'User' }, { text: 'Time' }, { text: 'Wager' }, { text: 'Odds' }, { text: 'Payout' }]
    }
  }
}

</script>
<style lang="css" scoped>
</style>
