<template>
  <div class="flex">
    <form class="flex flex-col gap-4 items-start">
      <div class="flex flex-col gap-2 items-start">
        <label class="font-medium">Email</label>
        <input
          type="email"
          class="border border-gray-200 rounded p-2 w-[400px]"
          v-model="credentials.email"
          placeholder="john@doe.fr"
        />
      </div>
      <div class="flex flex-col gap-2 items-start">
        <label class="font-medium">Mot de passe</label>
        <input
          type="password"
          class="border border-gray-200 rounded p-2 w-[400px]"
          v-model="credentials.password"
          placeholder="Entrez un mot de passe"
        />
      </div>
      <button class="bg-primary px-3 py-2 rounded text-white" @click="submit">
        Se connecter
      </button>
    </form>
  </div>
</template>

<script>
import { login } from "@/api/auth.js"

export default {
  data() {
    return {
      credentials: {
        email: "",
        password: ""
      },
    };
  },
  methods: {
    async submit(e) {
      e.preventDefault();
      e.stopPropagation();

      await login(this.credentials)
      
      return this.$router.push("/admin/patterns");
    },
  },
}
</script>