<template>
  <aside class="sticky top-0 left-0 h-screen w-[300px] bg-primary text-white flex flex-col content-between">
    <router-link
      class="h-16 px-4 flex items-center gap-4 border-b border-gray-200/30"
      to="/admin"
    >
      <img src="/svg/dashboard.svg" alt="Dashboard icon" />
      <p class="text-base">Administration</p>
    </router-link>
        <div class="flex flex-col gap-2 p-4">
          <AdminNavItem
            to="/admin/patterns"
            label="Patterns"
            iconPath="/svg/box.svg"
          />
           <AdminNavItem
            to="/admin/types"
            label="Types"
            iconPath="/svg/tool.svg"
          />
          <AdminNavItem
            to="/admin/users"
            label="Utilisateurs"
            iconPath="/svg/users.svg"
          />
        </div>
      
      <div class="border-t border-gray-200/30 grid gap-y-4 p-4 mt-auto">
        <AdminNavItem
          to="/"
          label="Retourner à l'accueil"
          iconPath="/svg/users.svg"
        />
        <button @click="disconnect" class="flex items-center text-sm gap-4 rounded p-4 cursor-pointer bg-primarydark">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 17L21 12L16 7"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 12H9"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Se déconnecter
        </button>
      </div>
    </aside>
</template>

<script>
import AdminNavItem from "@/components/layouts/admin/AdminNavItem.vue";
import { logout } from "@/api/auth.js"

export default {
  components: { AdminNavItem },
  methods: {
    async disconnect() {
      await logout()
      return this.$router.push("/");
    }
  }
}
</script>
