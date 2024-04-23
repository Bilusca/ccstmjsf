<script lang="ts"
  setup>
  import type { HTMLAttributes } from 'vue';

  const props = defineProps<{ class?: HTMLAttributes['class'] }>()
</script>

<template>
  <button
    :class="cn('inline-flex text-base-60 bg-base-10 border-0 py-2 px-6 focus:outline-none hover:brightness-150 duration-300 rounded-3xl text-xl font-bold transition-all', props.class)">
    <slot />
  </button>
</template>
