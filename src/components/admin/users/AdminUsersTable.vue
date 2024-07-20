<template>
  <table class="bg-white w-full">
    <thead>
      <tr>
        <th scope="col">Identifiant</th>
        <th scope="col">E-mail</th>
        <th scope="col">Date d'inscription</th>
      </tr>
    </thead>
    <tbody>
      <AdminUsersRow v-for="user in users" :user="user">
    </tbody>
  </table>
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
