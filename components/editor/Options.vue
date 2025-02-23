<template>
  <div class="md:flex md:items-center md:justify-between p-8">
    <div class="min-w-0 flex-1">
      <h2 class="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Quill on NuxtJS</h2>
    </div>
    <div class="mt-4 flex md:mt-0 md:ml-4">
      <Switch v-model="editorStore.showEditButton" @click="toggleDisplayEditIcon" :class="[editorStore.showEditButton ? 'bg-indigo-600' : 'bg-gray-200', 'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:outline-hidden']">
        <span aria-hidden="true" :class="[editorStore.showEditButton ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block size-5 transform rounded-full bg-white ring-0 shadow-sm transition duration-200 ease-in-out']" />
      </Switch>
    </div>
  </div>
</template>

<script setup>
import { useEditorStore } from '@/stores/editor';

import { ref } from 'vue'
import { Switch } from '@headlessui/vue'

const editorStore = useEditorStore()

const toggleDisplayEditIcon = () => {
  editorStore.setShowEditIcon(!editorStore.showEditButton)
}
</script>

