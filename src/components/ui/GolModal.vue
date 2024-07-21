<template>
  <Teleport to="body">
    <Transition>
      <div
        v-show="modalStore.isOpened"
        class="bg-black/80 w-full h-screen fixed top-0 flex items-center justify-center"
      >
        <dialog class="flex flex-col bg-white min-w-96 rounded-md">
          <header
            class="flex item-center p-4 justify-between border-b border-gray-300"
          >
            <h2 class="font-semibold text-xl">{{ title }}</h2>
            <button @click="modalStore.close">Fermer</button>
          </header>
          <main class="p-4">
            <slot name="main"></slot>
          </main>
          <footer class="border-t border-gray-300 p-4">
            <slot name="footer"></slot>
          </footer>
        </dialog>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
import { useModalStore } from "@/stores/modal";
import { mapStores } from "pinia";

export default {
  props: {
    title: {
      type: String,
      required: false,
    },
  },
  computed: {
    ...mapStores(useModalStore),
  },
};
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity .25s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
