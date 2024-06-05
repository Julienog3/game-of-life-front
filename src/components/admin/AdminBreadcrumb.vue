<template>
    <div class="flex gap-x-0.5 mb-8">
      <p>Admin</p>
      <p>></p>
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