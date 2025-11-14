<script setup lang="ts"></script>
<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <!-- HEADER -->
    <header class="bg-blue-600 text-white py-4">
      <h1 class="text-center text-2xl font-bold">Quiz Title</h1>
    </header>

    <!-- MAIN CONTENT -->
    <div class="flex-grow flex flex-col items-center justify-center py-10">
      <!-- Centered Main Box -->
      <div class="bg-white shadow-xl rounded-xl p-8 w-full max-w-2xl"></div>
      <!-- Grid of 4 boxes -->
      <div class="grid grid-cols-2 gap-4">
        <div class="p-6 bg-gray-200 rounded-lg text-center font-semibold">Option 1</div>
        <div class="p-6 bg-gray-200 rounded-lg text-center font-semibold">Option 2</div>
        <div class="p-6 bg-gray-200 rounded-lg text-center font-semibold">Option 3</div>
        <div class="p-6 bg-gray-200 rounded-lg text-center font-semibold">Option 4</div>
      </div>
    </div>

    <!-- FOOTER -->
    <footer class="bg-gray-800 text-white py-3 text-center">© 2025 Quiz App</footer>
  </div>
</template>
