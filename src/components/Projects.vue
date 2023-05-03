<template>
  <div class="mt-6 px-12">
    <p class="text-3xl mb-6 text-purple-500 font-bold text-center lg:text-4xl lg:pb-8 xl:text-5xl 2xl:text-6xl">Projects</p>
    <div class="flex flex-nowrap overflow-x-auto hidescroll">
      <div class="inline-block mx-2">
        <div class="bg-white shadow-md rounded-md p-4" style="width: 300px;">
          <h2 class="text-lg font-bold mb-2">Card 1</h2>
          <p class="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div class="inline-block mx-2">
        <div class="bg-white shadow-md rounded-md p-4" style="width: 300px;">
          <h2 class="text-lg font-bold mb-2">Card 2</h2>
          <p class="text-gray-500">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div class="inline-block mx-2">
        <div class="bg-white shadow-md rounded-md p-4" style="width: 300px;">
          <h2 class="text-lg font-bold mb-2">Card 3</h2>
          <p class="text-gray-500">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
      <div class="inline-block mx-2">
        <div class="bg-white shadow-md rounded-md p-4" style="width: 300px;">
          <h2 class="text-lg font-bold mb-2">Card 4</h2>
          <p class="text-gray-500">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>
    </div>

  </div>
</template>

<style>
  .flex-container {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
  }
  .card {
    display: inline-block;
    margin: 0 10px;
    width: 300px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    padding: 20px;
  }
  /* Hide scrollbar */
  .flex-container::-webkit-scrollbar {
    display: none;
  }
</style>
