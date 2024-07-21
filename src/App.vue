<template>
  <div v-if="isAdminPage || isLoginPage"><router-view></router-view></div>
  <div v-else>
    <GuestLayout />
  </div>
</template>

<script>
import GuestLayout from '@/components/layouts/GuestLayout.vue'

export default {
  components: { GuestLayout },
  computed: {
    isAdminPage() {
      return this.$route.path.includes("admin");
    },
    isLoginPage() {
      return this.$route.path.includes("login");
    },
  },
};
</script>
