<template>
  <div class="relative overflow-x-auto rounded-lg border p-4">
    <table class="w-full text-sm text-left">
      <thead class="text-sm border border-b-black border-t-0 border-x-0">
        <tr class="p-2">
          <th scope="col" class="px-6 py-3">Identifiant</th>
          <th scope="col" class="px-6 py-3">E-mail</th>
          <th scope="col" class="px-6 py-3">Date d'inscription</th>
          <th scope="col" class="px-6 py-3">Actions</th>
        </tr>
      </thead>
      <tbody class="[&>*:nth-child(odd)]:bg-graylight ">
        <AdminUsersRow v-for="user in users" :user="user"/>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminUsersRow from "@/components/admin/users/AdminUsersRow.vue";

export default {
  components: { AdminUsersRow },
  props: {
    users: {
      type: Array,
      required: false,
    },
  },
};
</script>
