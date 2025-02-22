<template>
  <div id="editor"></div>
</template>

<script setup>
import { onMounted, defineEmits, defineProps } from "vue";
import "quill/dist/quill.snow.css";

const emit = defineEmits(['onTextChange']);

const props = defineProps({
  content: {
    type: String,
    default: '',
  },
});

let quill = null;

onMounted(async () => {
  if (process.client) {
    const Quill = (
      await import("quill")).default;

      quill = new Quill("#editor", {
        theme: "snow",
        modules: {
          toolbar: {
            container: [
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ],
          },
        },
      });

      quill.on('text-change', () => {
        emit('onTextChange', quill.root.innerHTML); // Correct way to emit events
      });
  }
});

// Watch for changes in the content prop and update the editor
watch(() => props.content, (newContent) => {
  if (quill) {
    quill.root.innerHTML = newContent;
  }
});
</script>
