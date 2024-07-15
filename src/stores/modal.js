import { defineStore } from "pinia";

export const useModalStore = defineStore('modal', {
  state: () => {
    return {
      isOpened: false,
      data: null
    }
  },
  actions: {
    close() {
      this.data = null
      this.isOpened = false
    },
    open(data) {
      console.log({ data })

      if (data) {
        this.data = data
      }

      this.isOpened = true
    }
  }
})