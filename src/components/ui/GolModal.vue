<template>
  <Teleport to="body">
    <Transition>
      <div
        v-show="modalStore.isOpened"
        class="bg-black/80 w-full h-screen fixed top-0 flex items-center justify-center"
      >
        <dialog class="flex flex-col bg-white min-w-96 rounded-md">
          <header
            class="flex items-center p-4 justify-between border-b border-gray-300 "
          >
            <h2 class="font-semibold text-xl">{{ title }}</h2>
            <GolButton variant="secondary" @click="modalStore.close">
              <img src="/svg/cross.svg" />
            </GolButton>
          </header>
          <main class="p-4">
            <slot name="main"></slot>
          </main>
          <footer class="p-4">
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
import GolButton from "./GolButton.vue";

export default {
  components: { GolButton },
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
