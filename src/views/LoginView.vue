<script setup lang="ts">
</script>

<template>
  <div class="grid h-screen justify-center items-center bg-graylight">
    <div class="grid gap-y-4">
      <div class="flex items-center justify-center gap-x-4">
        <div class="w-[40px] h-[40px] rounded bg-primary"></div>
        <p class="font-bold text-xl">Game of Life</p>
      </div>
    <div class="border rounded-lg p-8 bg-white">
      <p class="text-xl mb-4">Se connecter</p>
      <form class="grid gap-y-4">
        <div class="grid gap-y-2">
          <label>Email</label>
          <input type="email" id="email" name="email" placeholder="julien@goat.com" class="border rounded p-2 min-w-[400px]">
        </div>
        <div class="grid gap-y-2">
          <label>Mot de passe</label>
          <input type="password" id="password" name="password" placeholder="*******" class="border rounded p-2 min-w-[400px]">
        </div>
        <div class="text-end">
          <input type="submit" value="Se connecter" class="bg-black w-fit rounded-lg text-white px-4 py-2 hover:bg-primary cursor-pointer">
        </div>
      </form>
    </div>
    <RouterLink to="/" class="text-center text-sm hover:underline">Retourner sur la page d'acceuil</RouterLink>
  </div>

  </div>
</template>
