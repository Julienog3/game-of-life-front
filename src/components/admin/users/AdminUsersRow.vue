<template>
  <tr>
    <th scope="row" class="px-6 py-4">
      <span class="bg-primarydark text-white px-4 py-2 rounded-full w-fit">
        {{ user.id }}
      </span>
    </th>
    <td class="px-6 py-4">{{ user.email }}</td>
    <td class="px-6 py-4">date</td>
    <td class="flex gap-2 px-6 py-4">
      <router-link
        :to="{ name: 'users_update', params: { id: user.id } }"
      >
        <button class="border border-gray-300 rounded w-8 h-8">M</button>
      </router-link>
      <button
        @click="modalStore.open({ id: user.id })"
        class="bg-black text-white rounded w-8 h-8"
      >
        S
      </button>
    </td>
  </tr>
</template>

<script>
import { useModalStore } from "@/stores/modal.js";
import { mapStores } from "pinia";

export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapStores(useModalStore),
  },
};
</script>
