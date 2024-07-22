<template>
  <tr>
    <th scope="row" class="px-6 py-4">
      <span class="bg-primarydark text-white px-4 py-2 rounded-full w-fit">
        {{ user.id }}
      </span>
    </th>
    <td class="px-6 py-4">{{ user.email }}</td>
    <td class="px-6 py-4">{{ user.createdAt }}</td>
    <td class="flex gap-2 px-6 py-4">
      <GolButton
        variant="secondary"
        @click="navigateToUpdate"
      >
        <img src="/svg/edit.svg" />
      </GolButton>
      <GolButton
        @click="openDeleteModal"
      >
        <img src="/svg/trash.svg" />
      </GolButton>
    </td>
  </tr>
</template>

<script>
import { useModalStore } from "@/stores/modal.js";
import { mapStores } from "pinia";
import GolButton from "../../ui/GolButton.vue";

export default {
  components: { GolButton },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    navigateToUpdate() {
      this.$router.push({ name: 'users_update', params: { id: this.user.id } })
    },
    openDeleteModal() {
      this.modalStore.open({ id: this.user.id })
    }
  },
  computed: {
    ...mapStores(useModalStore),
  },
};
</script>
