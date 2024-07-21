<template>
<header class="flex items-center h-16 px-4 w-full bg-white border-b border-borderGray justify-between">
  <h1>Game of life</h1>
  <nav>
    <ul class="flex gap-6">
      <li class="hover:text-graylight transition ease-in-out duration-100">
        <RouterLink to="/presentation" >
          Présentation
        </RouterLink>
      </li>
      <li class="hover:text-graylight transition ease-in-out duration-100">
        <RouterLink to="/glossary">
          Glossaire
        </RouterLink>
      </li>
    </ul>
  </nav>
</header>
</template>

<script>
import { RouterLink } from 'vue-router';


</script>