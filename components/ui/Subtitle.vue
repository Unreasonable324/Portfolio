<script setup lang="ts">
defineProps({
  size: {
    type: String as PropType<"large" | "medium" | "small" | "base">,
    default: "large",
  },
});
const sizes = {
  large: "text-6xl",
  medium: "text-3xl",
  small: "text-lg",
  base: "text-base",
};
</script>
<template>
  <div class="">
    <p class="tracking-wide text-gradient text-balance" :class="sizes[size]">
      <slot></slot>
    </p>
  </div>
</template>
<style></style>
