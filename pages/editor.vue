<template>
  <div class="flex bg-gray-100 overflow-auto">
    <div class="a4-landscape bg-white border border-gray-300 flex flex-col my-8 ml-8 mr-4 grow-0 shrink-0 basis-[1000px]">
      <MaisokuHeader class="w-full flex-shrink-0" @onSelect="resetCurrentContent" />
      <MaisokuBody class="w-full flex-grow" @onSelect="resetCurrentContent" />
      <MaisokuFooter class="w-full flex-shrink-0" @onSelect="resetCurrentContent" />
    </div>

    <div class="ml-4 bg-white my-8 mr-8 ml-4 grow flex flex-col border border-gray-300">
      <MaisokuQuillEditor
        v-if="maisokuStore.selectedSection != null"
        @onEditorChange="setSectionHtml"
        ref="quillEditor"
        />
      <div v-else class="flex-grow flex items-center justify-center">
        <p class="text-gray-500">Select a section to edit</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useMaisokuStore } from '@/stores/maisoku';

// Store and editor references
const maisokuStore = useMaisokuStore();
const quillEditor = ref(null);

// Methods
const setSectionHtml = (html) => {
  switch (maisokuStore.selectedSection) {
    case 'Header':
      maisokuStore.setHeaderHtml(html);
      break;
    case 'Body':
      maisokuStore.setBodyHtml(html);
      break;
    case 'Footer':
      maisokuStore.setFooterHtml(html);
      break;
  }
};

const resetCurrentContent = () => {
  switch (maisokuStore.selectedSection) {
    case 'Header':
      quillEditor.value?.resetContent(maisokuStore.headerHtml);
      break;
    case 'Body':
      quillEditor.value?.resetContent(maisokuStore.bodyHtml);
      break;
    case 'Footer':
      quillEditor.value?.resetContent(maisokuStore.footerHtml);
      break;
  }
};
</script>



<style scoped>
/* Smaller on-screen A4 landscape */
.a4-landscape {
  width: 70%;  /* Scaled-down width */
  aspect-ratio: 1123 / 794;  /* Maintains A4 landscape ratio */
  max-width: 1000px;  /* Max width for larger screens */
  background-color: white;
  transform-origin: top left;
}

@media print {
  /* Hide everything except the A4 container */
  body * {
    visibility: hidden; /* Hide all elements */
  }

  .a4-landscape, .a4-landscape * {
    visibility: visible; /* Show the A4 container and its children */
  }

  /* Ensure the A4 container has A4 dimensions */
  .a4-landscape {
    width: 297mm; /* A4 width */
    height: 210mm; /* A4 height */
    margin: 0;
    padding: 0;
    box-shadow: none;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden; /* Prevent overflow */
  }

  /* Ensure no additional page breaks occur */
  .a4-landscape {
    page-break-before: always;
    page-break-after: always;
  }
}

</style>
