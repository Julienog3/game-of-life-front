<template>
  <div class="flex">
    <AdminSidebar />
    <div class=" w-full bg-bgGray">
      <AdminHeader />
      <main class="py-8 px-12">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/layouts/admin/AdminSidebar.vue"
import AdminHeader from "@/components/layouts/admin/AdminHeader.vue"

export default {
  components: { AdminSidebar, AdminHeader },
  
};
</script>
