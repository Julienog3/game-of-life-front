<template>
  <div class="flex justify-between border-b border-gray-200 pb-4 mb-4">
    <div>
      <p class="text-4xl font-bold">{{ title }}</p>
      <p v-if="description">{{ description }}</p>
    </div>
    <div
      v-if="textBtn && url"
      class="flex items-center gap-2 rounded p-4 bg-primarydark text-white h-fit"
    >
      <img src="/svg/plus.svg" alt="Add" />
      <router-link :to="url">
        <button>Ajouter un {{ textBtn }}</button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    description: String,
    textBtn: String,
    url: String,
  },
};
</script>
