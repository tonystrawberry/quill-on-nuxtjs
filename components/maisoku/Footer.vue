<template>
  <footer class="relative w-full flex items-center h-16 border-t border-gray-300">
    <div v-html="maisokuStore.footerHtml" />
    <MaisokuEditButton @click="selectSection" />
  </footer>

</template>

<script setup>
import { defineEmits } from "vue";
import { useMaisokuStore } from '@/stores/maisoku';

const emit = defineEmits(['onSelect']);

const maisokuStore = useMaisokuStore();

const selectSection = () => {
  maisokuStore.setSelectedSection('Footer');
  emit('onSelect');
}
</script>

