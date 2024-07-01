<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
  size: {
    type: String as PropType<"large" | "medium" | "small">,
    default: "large",
  },
});

const sizes = {
  large: "text-6xl",
  medium: "text-3xl",
  small: "text-lg",
};
</script>
<template>
  <div class=" text-gradient" :class="sizes[size]"><slot></slot></div>
</template>

