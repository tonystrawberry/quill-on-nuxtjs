<template>
  <main class="relative flex-1 py-6">
    <div v-html="maisokuStore.bodyHtml" />
    <MaisokuEditButton @click="selectSection" />
  </main>
</template>

<script setup>
import { defineEmits } from "vue";
import { useMaisokuStore } from '@/stores/maisoku';

const emit = defineEmits(['onSelect']);

const maisokuStore = useMaisokuStore();

const selectSection = () => {
  maisokuStore.setSelectedSection('Body');
  emit('onSelect');
}
</script>
