<template>
  <div>
    <div class="w-full">
      <div class="p-4 w-full bg-dicePurple-100 flex justify-end hidden lg:flex">
        <div class="container mx-auto">
          <p class="text-gray-400 mr-8 float-right text-sm">
            Wagers All Time <span class="text-yellow-500">234,455</span>
          </p>
        </div>
      </div>
      <div class="w-full bg-dicePurple-200 shadow py-4 px-6">
        <div class="flex items-center container mx-auto justify-between">
          <div>
            <router-link class="text-yellow-500 text-semibold" :to="{name: 'Home'}">LOGO</router-link>
          </div>
          <div class="justify-between">
            <button
              class="px-3 py-2 mx-1 text-sm text-yellow-500 rounded border border-yellow-500 focus:outline-none hover:bg-opacity-25 hover:bg-gray-100 hover:border-yellow-400 ease-in-out duration-500 transition"
              @click="openLogin"
            >
              Login
            </button>
            <button
              class="px-3 py-2 mx-2 text-sm text-dicePurple-200 rounded border bg-yellow-500 focus:outline-none hover:bg-yellow-400 border-transparent ease-in-out duration-500 transition"
              @click="openRegister"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- modals -->
    <dice-modal ref="auth">
      <template v-slot:header>
        <h1 class="text-gray-300 font-semibold text-sm">Welcome</h1>
      </template>
      <template v-slot:body>
        <div class="flex items-start h-full bg-hero-pattern">
          <div class="hidden md:block w-1/2 relative lg:h-full">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 751.86 1080"
              class="shadow-md h-full"
            >
              <path
                d="M726 1080s8-10 1-39-56-158-1-292c31.59-77 37.26-270.69 0-360-58-139 37-161 4-389H0v1080h726"
                fill="#2f3258"
                data-name="Layer 1-2"
              />
            </svg>
            <div class="absolute inset-0 mx-auto">
              <div class="pt-32 w-11/12 mx-4">
                <p class="text-left mx-auto text-yellow-500 text-3xl px-4">
                  LOGO
                </p>
                <p
                  class="px-4 text-left break-words text-3xl text-gray-300 font-semibold"
                >
                  Fastest Growing Dice Game
                </p>
              </div>
              <p
                class="font-semibold text-gray-600 text-sm mx-6 w-11/12 inset-x-0 bottom-0 absolute pb-4"
              >
                324,453,54 Bets Wagered
              </p>
            </div>
          </div>
          <div class="w-full md:w-1/2 p-4">
            <div class="bg-transparent mt-4">
              <nav class="flex flex-col sm:flex-row lg:justify-end">
                <button
                  class="tablinks text-cowtribeGreen-100 py-4 px-6 hover:text-gray-100 focus:outline-none text-gray-600 font-medium"
                  v-for="(tab, index) in tabs"
                  :key="index"
                  :class="
                    currentTab === tab.component
                      ? 'border-b-2 border-yellow-500 text-white font-semibold'
                      : ''
                  "
                  @click="currentTab = tab.component"
                >
                  <span v-if="tab.name == 'Login'" class="flex items-center"
                    >{{ tab.name }}
                    <div
                      class="rounded-full py-0 ml-1 flex items-center mx-auto text-center px-2 shadow-sm bg-cowtribeGreen-200"
                    ></div>
                  </span>
                  <span v-if="tab.name == 'Register'" class="flex items-center">
                    {{ tab.name }}
                    <div
                      class="rounded-full py-0 ml-1 flex items-center mx-auto text-center px-2 shadow-sm bg-cowtribeGreen-200"
                    ></div>
                  </span>
                </button>
              </nav>
            </div>
            <keep-alive>
              <component v-bind:is="currentTab"></component>
            </keep-alive>
          </div>
        </div>
      </template>
    </dice-modal>
    <!-- modals -->
  </div>
</template>
<script>
import LoginForm from '@/components/Forms/LoginForm'
import RegisterForm from '@/components/Forms/RegisterForm'
export default {
  name: 'NavbarComponent',
  components: { LoginForm, RegisterForm },
  data () {
    return {
      currentTab: 'LoginForm',
      tabs: [
        { name: 'Login', component: 'LoginForm' },
        { name: 'Register', component: 'RegisterForm' }
      ]
    }
  },
  computed: {
    currentTabComponent: function () {
      if (this.currentTab === 'Login') {
        return 'LoginForm'
      } else {
        return 'RegisterForm'
      }
    }
  },
  methods: {
    openRegister () {
      this.$refs.auth.openModal()
      this.currentTab = 'RegisterForm'
    },
    openLogin () {
      this.$refs.auth.openModal()
      this.currentTab = 'LoginForm'
    }
  }
}
</script>
<style lang="scss" scoped>
.login-bg {
  background: url("/img/modal-bg.png");
  width: 100% !important;
  height: 100%;
  background-repeat: no-repeat;
}
</style>
