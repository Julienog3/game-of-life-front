<template>
  <div class="flex items-center gap-x-4">
    <div class="bg-primary rounded min-w-[40px] min-h-[40px]"></div>
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
    content: String
  },
};
</script>