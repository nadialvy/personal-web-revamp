<template>
  <div class="bg-purple-500 overflow-x-hidden">
    <img src="/hero/el-hero-star.svg" alt="star" class="absolute opacity-80 -z-0 left-0 bottom-0 top-[500px] md:top-[600px] lg:top-[450px] w-32 md:w-44 lg:w-52 xl:w-72 xl:top-[510px]">
    <img src="/hero/el-hero-round.png" alt="star round" class="absolute -z-0 top-0 left-64 md:left-[450px] lg:left-[550px] w-32 md:w-48 lg:w-64 xl:w-96 xl:left-[900px] 2xl:left-[1300px]">
    <div class="flex flex-wrap" id="animate-on-load" >
      <div class="px-8 py-6 md:pt-32 lg:w-1/5 lg:px-12 lg:py-16 z-10 2xl:px-24">
        <div class="text-white lg:absolute lg:pr-80 xl:pr-96 lg:inset-y-1/3 lg:transform lg:-translate-y-1/3">
          <p class="text-3xl font-bold md:text-4xl lg:text-5xl lg:pr-16 xl:text-7xl">
            Innovation, Exploration, and Everything In Between
          </p>
          <p class="pt-8 pb-4 md:pr-64 lg:pr-72 xl:pr-96 md:text-lg lg:text-lg md:pt-12 md:pb-10 xl:text-2xl 2xl:pt-32 2xl:pr-[550px]">
            Welcome to Nadia’s personal website, where I showcase my skills and
            expertise in software engineering.
          </p>
          <button class="bg-pink-500 px-6 py-2 md:text-lg lg:text-lg hover:bg-pink-600 transition-all md:px-8 md:py-3 xl:text-xl 2xl:text-2xl font-semibold">Discover More</button>
        </div>
      </div>
      <div class="lg:w-4/5 -z-0">
        <img src="/hero/hero-2.png" alt="Hero" class="lg:w-[1000px] relative left-16 md:left-28 lg:bottom-0 lg:left-32 xl:left-[290px] 2xl:left-[680px]"/>
      </div>
    </div>
  </div>
  <div class="h-[600px]">
    tes
  </div>
</template>

<style scoped>
.animate-up {
  animation: animateUp 1s ease forwards;
}
@keyframes animateUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

<script>
export default {
  mounted() {
    const animateOnLoad = document.getElementById("animate-on-load");
    animateOnLoad.classList.add("animate-up");
  },
};
</script>