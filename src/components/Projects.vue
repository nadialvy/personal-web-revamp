<template>
  <div class="mt-6 px-8 2xl:px-20">
    <p class="text-3xl mb-6 text-purple-500 font-bold text-center lg:text-4xl lg:pb-8 xl:text-5xl 2xl:text-6xl">Projects</p>
    <div class="carousel rounded-box mb-12">
      <div class="carousel-item">
        <div class="card border h-96 border-grey">
          <p class="text-2xl font-bold">Project 1</p>
          <p class="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        </div>
      </div>
      <div class="carousel-item">
        <div class="card border h-96 border-grey">
          <p class="text-2xl font-bold">Project 1</p>
          <p class="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        </div>
      </div>
      <div class="carousel-item">
        <div class="card border h-96 border-grey">
          <p class="text-2xl font-bold">Project 1</p>
          <p class="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        </div>
      </div>
      <div class="carousel-item">
        <div class="card border h-96 border-grey">
          <p class="text-2xl font-bold">Project 1</p>
          <p class="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        </div>
      </div>
      <div class="carousel-item">
        <div class="card border h-96 border-grey">
          <p class="text-2xl font-bold">Project 1</p>
          <p class="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        </div>
      </div>
      <div class="carousel-item">
        <div class="card border h-96 border-grey">
          <p class="text-2xl font-bold">Project 1</p>
          <p class="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
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
