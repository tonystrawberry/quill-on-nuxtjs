<template>
  <div class="flex bg-gray-100 overflow-auto">
    <div class="a4-landscape bg-white border flex flex-col my-8 ml-8 mr-4">
      <!-- Header -->
      <MaisokuHeader class="w-full flex-shrink-0" />

      <!-- Body (Main Content) -->
      <MaisokuBody class="w-full flex-grow" />

      <!-- Footer -->
      <MaisokuFooter class="w-full flex-shrink-0" />
    </div>

    <div class="ml-4 bg-white my-8 mr-8 ml-4 grow flex flex-col">
      <MaisokuQuillEditor />
    </div>
  </div>
</template>

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
