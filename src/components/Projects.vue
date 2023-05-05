<template>
  <p class="relative bottom-[68px] lg:bottom-[98px] bg-sandwhite-100" id="projects"></p>
  <div class="px-8 py-6 lg:px-20 xl:px-28 2xl:px-72 lg:py-10 relative bg-white">
    <p class="text-center font-bold text-red-500 lg:text-lg mb-4">!!! This page is under construction !!!</p>
    <p class="text-3xl mb-6 text-purple-500 font-bold text-center lg:text-4xl lg:pb-8 xl:text-5xl 2xl:text-6xl">Projects</p>
    <img src="/project/stars.svg" alt="Stars" class="absolute z-30 w-28 top-10 -left-2 lg:w-36 lg:top-16 lg:-left-4 2xl:left-56 2xl:top-24">
    <img src="/project/star.svg" alt="Star" class="absolute z-30 w-16 bottom-10 right-4 lg:w-24 2xl:bottom-12 2xl:right-56">
    <div class="carousel rounded-box mb-10">
      <div class="carousel-item">
        <div class="card border h-96 xl:h-[410px] 2xl:h-[500px] border-grey">
          <p class="xl:text-xl 2xl:text-2xl text-2xl font-bold mb-8">Project 1</p>
          <p class="xl:text-xl 2xl:text-2xl text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        </div>
      </div>
      <div class="carousel-item">
        <div class="card border h-96 xl:h-[410px] 2xl:h-[500px] border-grey">
          <p class="xl:text-xl 2xl:text-2xl text-2xl font-bold mb-8">Project 2</p>
          <p class="xl:text-xl 2xl:text-2xl text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        </div>
      </div>
      <div class="carousel-item">
        <div class="card border h-96 xl:h-[410px] 2xl:h-[500px] border-grey">
          <p class="xl:text-xl 2xl:text-2xl text-2xl font-bold mb-8">Project 3</p>
          <p class="xl:text-xl 2xl:text-2xl text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        </div>
      </div>
      <div class="carousel-item">
        <div class="card border h-96 xl:h-[410px] 2xl:h-[500px] border-grey">
          <p class="xl:text-xl 2xl:text-2xl text-2xl font-bold mb-8">Project 4</p>
          <p class="xl:text-xl 2xl:text-2xl text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        </div>
      </div>
      <div class="carousel-item">
        <div class="card border h-96 xl:h-[410px] 2xl:h-[500px] border-grey">
          <p class="xl:text-xl 2xl:text-2xl text-2xl font-bold mb-8">Project 5</p>
          <p class="xl:text-xl 2xl:text-2xl text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        </div>
      </div>
      <div class="carousel-item">
        <div class="card border h-96 xl:h-[410px] 2xl:h-[500px] border-grey">
          <p class="xl:text-xl 2xl:text-2xl text-2xl font-bold mb-8">Project 6</p>
          <p class="xl:text-xl 2xl:text-2xl text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
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
