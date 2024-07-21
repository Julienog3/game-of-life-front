<template>
    <div class="flex gap-2 mb-8">
      <p class="">Admin</p>
      <p>/</p>
      <p class="font-bold">{{ page }}</p>
    </div>
</template>
<script>
export default {
  props: {
    page: String
  }
};
</script>