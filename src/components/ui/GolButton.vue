<template>
  <button
    class="flex items-center gap-2 rounded p-3  h-fit"
    :class="buttonClasses"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      required: false,
      default: 'primary'
    }
  },
  computed: {
    buttonClasses() {      
      switch (this.variant) {
        case 'primary':
          return 'bg-primary text-white'
        case 'secondary':
          return 'bg-white border border-borderGray'
        case 'danger':
          return 'bg-red text-white'
      }
    }
  }
}
</script>
