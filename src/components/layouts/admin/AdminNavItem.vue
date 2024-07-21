<template>
  <RouterLink
    class="flex items-center gap-4 rounded p-4 cursor-pointer hover:bg-primarydark transition ease-in-out delay-100"
    :to="to"
  >
    <img :src="iconPath" alt="" />
    <p class="text-sm">{{ label }}</p>
  </RouterLink>
</template>
<script>
export default {
  props: {
    label: String,
    to: String,
    iconPath: String
  },
};
</script>
