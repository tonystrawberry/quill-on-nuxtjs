<template>
  <div class="relative w-full border-b border-gray-300 flex justify-between items-center h-16 overflow-hidden">
    <div v-html="editorStore.headerHtml" />
    <EditorEditButton v-if="editorStore.showEditButton" @click="selectSection" />
  </div>
</template>

<script setup>
import { defineEmits } from "vue";
import { useEditorStore } from '@/stores/editor';

import 'quill-table-better/dist/quill-table-better.css'

const emit = defineEmits(['onSelect']);

const editorStore = useEditorStore();

const selectSection = () => {
  editorStore.setSelectedSection('Header');
  emit('onSelect');
}
</script>

<style scoped>
.ql-editor {
  all: revert;
}
</style>

