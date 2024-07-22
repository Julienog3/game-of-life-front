<template>
  <div class="flex">
    <form class="flex flex-col gap-4 items-start">
      <div class="flex flex-col gap-2 items-start">
        <label class="font-medium">E-mail</label>
        <input
          type="email"
          class="border border-gray-200 rounded p-2"
          v-model="newUser.email"
          placeholder="john@doe.fr"
        />
      </div>
      <div v-if="!user" class="flex flex-col gap-2 items-start">
        <label class="font-medium">Mot de passe</label>
        <input
          type="password"
          class="border border-gray-200 rounded p-2"
          v-model="newUser.password"
          placeholder="Entrez un mot de passe"
        />
      </div>
      <button class="bg-primary px-3 py-2 rounded text-white" @click="submit">
        {{ buttonLabel }}
      </button>
    </form>
  </div>
</template>
<script>
import {
  createUser,
  updateUser,
} from "@/api/users.js";

export default {
  props: {
    user: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      newUser: {
        email: "",
        password: ""
      },
    };
  },
  methods: {
    async submit(e) {
      e.preventDefault();
      e.stopPropagation();

      if (!this.user) {
        await createUser(this.newUser);
        return this.$router.push("/admin/users");
      }

      await updateUser(this.user.id, this.newUser);
      return this.$router.push("/admin/users");
    },
  },
  mounted() {
    if (this.user) {
      this.newUser = { ...this.user };
    }
  },
  computed: {
    buttonLabel() {
      return !!this.user ? "Modifier l'utilisateur" : "Ajouter un utilisateur";
    },
  },
};
</script>
