

<template>
  <div class="grid h-screen justify-center items-center bg-bgGray">
    <div class="grid gap-y-4">
      <div class="flex items-center justify-center gap-x-4">
        <div class="w-[40px] h-[40px] rounded bg-primary"></div>
        <p class="font-bold text-xl">Game of Life</p>
      </div>
    <div class="border rounded-lg p-8 bg-white">
      <p class="text-xl mb-4">Se connecter</p>
      <AuthLoginForm />
    </div>
    <router-link to="/" class="text-center text-sm hover:underline">Retourner sur la page d'accueil</router-link>
  </div>
  </div>
</template>

<script>
import AuthLoginForm from "@/components/auth/AuthLoginForm.vue"

export default {
  components: { AuthLoginForm }
}
</script>
