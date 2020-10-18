<template>
  <div>
    <label v-if="label" :class="labelClass"
      >{{ label }}<span class="text-red-600 mr-2 text-lg mt-1" v-show="requiredField">*</span
      ></label
    >
    <input
      @input="updateValue"
      :value="value"
      v-bind="$attrs"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-white mt-1 leading-tight focus:outline-none"
      :class="inputClass"
      v-on="listeners"
    />
  </div>
</template>

<script>
export default {
  name: 'CowtribeInput',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ''
    },
    value: [String, Number],
    labelClass: [String],
    requiredField: [Boolean],
    inputClass: [String, Array]
  },
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        input: this.updateValue
      }
    }
  },
  methods: {
    updateValue (event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped></style>
