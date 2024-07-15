<template>
  <div>
    <header
      class="fixed r-0 h-full w-[300px] bg-primarydark text-white grid content-between"
    >
      <div>
        <RouterLink
          class="px-2 py-6 flex gap-x-2 border-b border-gray-200/30"
          to="/admin"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 3V21"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Administration</p>
        </RouterLink>
        <div class="flex flex-col gap-2 p-4">
          <AdminNavItem
            :icon="'boxSVG'"
            :text="'Patterns'"
            :path="'/admin/patterns'"
          />
          <AdminNavItem
            :icon="'toolSVG'"
            :text="'Types'"
            :path="'/admin/types'"
          />
          <AdminNavItem
            :icon="'usersSVG'"
            :text="'Utilisateurs'"
            :path="'/admin/users'"
          />
        </div>
      </div>
      <div class="border-t border-gray-200/30 grid gap-y-4 p-4">
        <AdminNavItem :icon="'helpSVG'" :text="'Aide'" :path="'/admin/help'" />
        <div class="flex gap-x-2 rounded p-4 cursor-pointer bg-primary">
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
          <p>Se déconnecter</p>
        </div>
      </div>
    </header>
    <main class="ms-[300px] py-8 px-12">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import AdminNavItem from "@/components/admin/AdminNavItem.vue";

export default {
  components: { AdminNavItem },
};
</script>
