<template>
  <div>
    <header class="inset-x-0 top-0 z-50 flex h-16 border-b border-gray-900/10">
      <div class="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div class="flex flex-1 items-center gap-x-6">
          <img class="h-8 w-auto" src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
        </div>
      </div>
    </header>

    <main>
      <div class="mx-auto">
        <slot />
      </div>
    </main>
  </div>
</template>