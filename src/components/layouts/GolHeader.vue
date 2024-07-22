<template>
  <header class="flex items-center p-4 border-b border-borderGray justify-between">
    <RouterLink to="/">
      <p class="font-bold text-lg">Game of Life</p>
    </RouterLink>

    <nav class=" flex gap-8 items-center">
      <ul class="flex gap-4 items-center">
        <li>
          <RouterLink to="/presentation">Présentation</RouterLink>
        </li>
        <li>
          <RouterLink to="/glossary">Glossaire</RouterLink>
        </li>
        <li>
          <RouterLink to="/simulator">Simulateur</RouterLink>
        </li>
      </ul>      
      <GolButton v-if="!isAuthenticated" @click="navigateToLogin">Se connecter</GolButton>
      <GolButton variant="secondary" v-if="isAuthenticated" @click="navigateToAdmin">Dashboard administrateur</GolButton>
    </nav>
  </header>
</template>

<script>
import GolButton from '@/components/ui/GolButton.vue';
import Cookies from 'js-cookie';

export default {
  components: { GolButton },
  methods: {
    navigateToLogin() {
      this.$router.push('/login')
    },
    navigateToAdmin() {
      this.$router.push('/admin/patterns')
    }
  },
  computed: {
    isAuthenticated() {
      return !!Cookies.get('jwtToken')
    }
  }
}
</script>