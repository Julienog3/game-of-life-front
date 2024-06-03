<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="grid grid-cols-12 mt-4 mb-8">
    <div class="col-start-2 col-span-3">
      <RouterLink to="/">
        <div class="flex items-center gap-x-4">
          <div class="w-[40px] h-[40px] rounded bg-primary">
          </div>
          <p class="font-bold text-xl">Game of Life</p>
        </div>
      </RouterLink>
    </div>
    <nav class="col-span-7 flex items-center justify-end gap-x-4">
      <RouterLink to="/presentation">Présentation</RouterLink>
      <RouterLink to="/glossary">Glossaire</RouterLink>
      <RouterLink to="/simulator">Simulateur</RouterLink>
      <div class="bg-primary p-4 rounded text-white">
        Se connecter
      </div>
    </nav>
  </header>

  <main class="grid grid-cols-12">
    <div class="col-start-2 col-span-10">
      <RouterView />
    </div>
  </main>

  <footer class="mt-12 px-8">
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-x-4">
        <div class="w-[40px] h-[40px] rounded bg-primary">
        </div>
        <p class="font-bold text-xl">Game of Life</p>
      </div>
      <nav class="flex items-center gap-x-4">
        <RouterLink to="/presentation">Présentation</RouterLink>
        <RouterLink to="/glossary">Glossaire</RouterLink>
        <RouterLink to="/simulator">Simulateur</RouterLink>
      </nav>
    </div>
    <p class="mt-8">© 2024 Game of life, All right reserved</p>
  </footer>
</template>
