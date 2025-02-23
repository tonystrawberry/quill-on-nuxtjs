<template>
  <div class="relative w-full border-b border-gray-300 flex justify-between items-center h-16">
    <div v-html="maisokuStore.headerHtml" />
    <MaisokuEditButton @click="selectSection" />
  </div>
</template>

<script setup>
import { defineEmits } from "vue";
import { useMaisokuStore } from '@/stores/maisoku';

const emit = defineEmits(['onSelect']);

const maisokuStore = useMaisokuStore();

const selectSection = () => {
  maisokuStore.setSelectedSection('Header');
  emit('onSelect');
}
</script>

