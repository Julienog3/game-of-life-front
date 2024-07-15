import { defineStore } from "pinia";

export const useModalStore = defineStore('modal', {
  state: () => {
    return {
      isOpened: true
    }
  },
  actions: {
    close() {
      this.isOpened = false
    },
    open() {
      console.log('opened !')
      this.isOpened = true
    }
  }
})