<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
  size: {
    type: String as PropType<"large" | "medium" | "small"|"ultra_small">,
    default: "large",
  },
});

const sizes = {
  large: "text-6xl",
  medium: "text-3xl",
  small: "text-lg",
  ultra_small: "text-sm",
};
</script>
<template>
  <div class=" text-gradient" :class="sizes[size]"><slot></slot></div>
</template>

