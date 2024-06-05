<template>
    <div class="flex justify-between border-b border-gray-200 pb-8">
      <div>
        <p class="text-4xl font-bold">{{ title }}</p>
        <p>{{ description }}</p>
      </div>
      <div class="flex items-center gap-x-2 rounded p-4 bg-primary text-white h-fit">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="18" height="18" fill="#404040"/>
          <path d="M9 3.75V14.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3.75 9H14.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <p>Ajouter un {{textBtn}}</p>
      </div>
    </div>
</template>
<script>
export default {
  props: {
    title: String,
    description: String,
    textBtn: String,
  }
};
</script>