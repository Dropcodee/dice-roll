<template>
  <div>
    <form @submit.prevent="LoginHandler" class="pt-1">
      <div class="my-1">
        <form-input
          placeholder="codemagik"
          label="Username"
          :requiredField="true"
          type="email"
          label-class="text-gray-500 text-xs"
          inputClass="bg-gray-800 opacity-50 border-transparent shadow-md focus:outline-none"
        />
      </div>
      <div class="my-1">
        <form-input
          placeholder="codemagik"
          label="Date Of Birth"
          :requiredField="true"
          type="date"
          label-class="text-gray-500 text-xs"
          inputClass="bg-gray-800 opacity-50 border-transparent shadow-md focus:outline-none"
        />
      </div>
      <div class="my-1">
        <form-input
          placeholder="************"
          label="Password"
          :requiredField="true"
          type="password"
          label-class="text-gray-500 text-xs"
          inputClass="bg-gray-800 opacity-50 border-transparent shadow-md focus:outline-none"
        />
      </div>
      <div class="my-1">
        <form-input
          placeholder="***********"
          label="Confirm Password"
          :requiredField="true"
          type="password"
          label-class="text-gray-500 text-xs"
          inputClass="bg-gray-800 opacity-50 border-transparent shadow-md focus:outline-none"
        />
      </div>
      <div class="flex items-center justify-end mt-3">
        <button
          class="text-sm text-dicePurple-100 rounded bg-yellow-500 hover:bg-yellow-400 px-6 py-2"
        >
          Register
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'RegisterForm',

  data () {
    return {}
  }
}
</script>
<style lang="css" scoped>
</style>
