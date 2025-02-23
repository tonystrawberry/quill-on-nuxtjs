<template>
  <div class="relative flex-1 flex justify-between items-center overflow-hidden">
    <div class="ql-editor" v-html="editorStore.bodyHtml" />
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
  editorStore.setSelectedSection('Body');
  emit('onSelect');
}
</script>

<style scoped>
.ql-editor {
  all: revert;
}
</style>