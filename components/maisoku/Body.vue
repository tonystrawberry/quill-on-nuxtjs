<template>
  <div class="relative flex-1 flex justify-between items-center overflow-hidden">
    <div class="ql-editor" v-html="maisokuStore.bodyHtml" />
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
  maisokuStore.setSelectedSection('Body');
  emit('onSelect');
}
</script>

<style scoped>
.ql-editor {
  all: revert;
}
</style>