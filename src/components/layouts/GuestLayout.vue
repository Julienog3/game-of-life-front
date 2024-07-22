<template>
  <GolHeader />
  <main class="flex flex-col bg-bgGray">
    <div class="col-start-2 col-span-10">
      <RouterView />
    </div>
  </main>
  <GolFooter />
</template>

<script>
import GolHeader from "@/components/layouts/GolHeader.vue"
import GolFooter from "@/components/layouts/GolFooter.vue"

export default {
  components: { GolHeader, GolFooter }
}
</script>