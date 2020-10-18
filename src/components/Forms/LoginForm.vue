<template>
  <div>
    <form @submit.prevent="LoginHandler" class="pt-6">
      <div class="my-3">
        <form-input
          placeholder="codemagik"
          label="Username"
          :requiredField="true"
          type="email"
          label-class="text-gray-500 text-xs"
          inputClass="bg-gray-800 text-gray-300 opacity-50 border-transparent shadow-md focus:outline-none"
        />
      </div>
      <div class="my-3">
        <form-input
          placeholder="************"
          label="Password"
          :requiredField="true"
          type="password"
          label-class="text-gray-500 text-xs"
          inputClass="bg-gray-800 opacity-50 border-transparent shadow-md focus:outline-none"
        />
      </div>
      <div class="flex items-center justify-end">
        <router-link class="text-yellow-600 text-xs font-semibold mx-3" :to="{name: 'Home'}">Reset Your Password</router-link>
        <button class="text-sm text-dicePurple-100 rounded bg-yellow-500 hover:bg-yellow-400 px-4 py-3">Login</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'LoginForm',

  data () {
    return {}
  }
}
</script>
<style lang="css" scoped>
</style>
