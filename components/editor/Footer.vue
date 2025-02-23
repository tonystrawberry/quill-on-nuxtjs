<template>
  <div class="relative w-full flex items-center h-16 border-t border-gray-300 overflow-hidden">
    <div v-html="editorStore.footerHtml" />
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
  editorStore.setSelectedSection('Footer');
  emit('onSelect');
}
</script>

