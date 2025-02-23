<template>
  <div class="relative w-full flex items-center h-16 border-t border-gray-300 overflow-hidden">
    <div v-html="maisokuStore.footerHtml" />
    <MaisokuEditButton @click="selectSection" />
  </div>

</template>

<script setup>
import { defineEmits } from "vue";
import { useMaisokuStore } from '@/stores/maisoku';

import 'quill-table-better/dist/quill-table-better.css'

const emit = defineEmits(['onSelect']);

const maisokuStore = useMaisokuStore();

const selectSection = () => {
  maisokuStore.setSelectedSection('Footer');
  emit('onSelect');
}
</script>

