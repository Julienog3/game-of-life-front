<template>
  <div class="flex justify-center">
    <GolSimulator :maxLine="15" :maxCol="40"></GolSimulator>
  </div>
</template>

<script>
import GolSimulator from '@/components/GolSimulator.vue';
export default {
  components: {GolSimulator},
};
</script>
