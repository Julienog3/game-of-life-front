<template>
  <tr>
    <th scope="row">Chris</th>
    <td>HTML tables</td>
    <td>22</td>
  </tr>
  <tr>
    <th scope="row">Dennis</th>
    <td>Web accessibility</td>
    <td>45</td>
  </tr>
  <tr>
    <th scope="row">Sarah</th>
    <td>JavaScript frameworks</td>
    <td>29</td>
  </tr>
  <tr>
    <th scope="row">Karen</th>
    <td>Web performance</td>
    <td>36</td>
  </tr>
</template>

<script>
import { useModalStore } from "@/stores/modal.js";
import { mapStores } from "pinia";

export default {
  props: {
    configuration: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapStores(useModalStore),
  },
};
</script>
