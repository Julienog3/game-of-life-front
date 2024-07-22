<template>
  <div class="flex items-center gap-x-4">
    <div class="bg-borderGray rounded-md w-12 h-12 flex items-center justify-center">
      <img v-if="urlIcon" :src="urlIcon" alt="" />
    </div>
    <div>
      <p class="font-bold">{{ title }}</p>
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
    urlIcon: String
  },
};
</script>