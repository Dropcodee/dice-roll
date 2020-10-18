
<template>
  <transition name="fade">
    <div class="modal" v-if="show">
      <div class="modal__backdrop" @click="closeModal()"/>

      <div class="modal__dialog">
        <div class="modal__dialog__backdrop"></div>
        <div class="flex justify-between p-2 z-20 bg-dicePurple-100 items-center">
          <slot name="header"/>
          <button type="button" class="modal__close" @click="closeModal()">
            <i class="fa fa-times text-gray-600 fill-current text-xl"></i>
          </button>
        </div>

        <div class="modal__body">
          <slot name="body"/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  data () {
    return {
      show: false
    }
  },
  methods: {
    closeModal () {
      this.show = false
      document.querySelector('body').classList.remove('overflow-hidden')
    },
    openModal () {
      this.show = true
      document.querySelector('body').classList.add('overflow-hidden')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  &__backdrop {
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
  &__dialog {
    background: url("https://images.hdqwalls.com/wallpapers/abstract-vector-design-a8.jpg");
    position: relative;
    width: 600px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    z-index: 2;
    &__backdrop {
      position: absolute;
      background: rgba(25, 27, 54, 0.9);
      height: 100%;
      width: 100%;
      z-index: 0;
    }
    @media screen and (max-width: 992px) {
      width: 90%;
    }
  }
  &__close {
    width: 30px;
    height: 30px;
  }
  &__header {
    padding: 20px 20px 10px;
    display: flex;
    z-index: 20;
    align-items: flex-start;
    justify-content: space-between;
  }
  &__body {
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    z-index: 20;
  }
  &__footer {
    padding: 10px 20px 20px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
