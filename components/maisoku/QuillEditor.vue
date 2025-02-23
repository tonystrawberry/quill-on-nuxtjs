<template>
  <div id="editor"></div>
</template>

<script setup>
import { onMounted, defineEmits, defineProps, defineExpose } from "vue";
import "quill/dist/quill.snow.css";

const emit = defineEmits(['onTextChange']);

let quill = null;

onMounted(async () => {
  if (process.client) {
    const Quill = (
      await import("quill")).default;

      quill = new Quill("#editor", {
        theme: "snow"
      });

      quill.on('text-change', () => {
        emit('onTextChange', quill.root.innerHTML); // Correct way to emit events
      });
  }
});

const resetContent = (content) => {
  quill.root.innerHTML = content
};

defineExpose({
  resetContent,
});

</script>
