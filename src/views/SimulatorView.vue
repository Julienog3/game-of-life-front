<template>
  <div class="flex justify-center">
    <GolSimulator :maxLine="20" :maxCol="50"></GolSimulator>
  </div>
</template>

<script>
import GolSimulator from '@/components/GolSimulator.vue';
export default {
  components: {GolSimulator},
};
</script>
