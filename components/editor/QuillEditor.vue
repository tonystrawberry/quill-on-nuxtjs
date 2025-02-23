<template>
  <div id="editor"></div>
</template>

<script setup>
import { onMounted, defineEmits, defineProps, defineExpose } from "vue";
import QuillTableBetter from 'quill-table-better';
import 'quill-table-better/dist/quill-table-better.css'

const emit = defineEmits(['onEditorChange']);

let quill = null;

onMounted(async () => {
  if (process.client) {
    const Quill = (
      await import("quill")).default;
      await import('quill/dist/quill.snow.css');

      Quill.register({ 'modules/table-better': QuillTableBetter }, true);

      const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
        ['link', 'image', 'video', 'formula'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean'],                                        // remove formatting button
        ['table-better']
      ];

      quill = new Quill("#editor", {
        theme: "snow",
        modules: {
          table: false,
          toolbar: toolbarOptions,
          'table-better': {
            language: 'en_US',
            menus: ['column', 'row', 'merge', 'table', 'cell', 'wrap', 'copy', 'delete'],
            toolbarTable: true
          },
          keyboard: {
            bindings: QuillTableBetter.keyboardBindings
          }
        }
      });

      quill.on('editor-change', () => {
        emit('onEditorChange', quill.root.innerHTML); // Correct way to emit events
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
