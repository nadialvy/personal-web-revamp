<template>
  <div class="bg-purple-500 lg:relative lg:overflow-x-hidden">
    <div class="flex flex-wrap" id="animate-on-load" >
      <div class="px-8 py-6 md:py-12 lg:w-1/5 lg:px-12 lg:py-16">
        <div class="text-white lg:absolute lg:pr-80 lg:inset-y-1/3 lg:transform lg:-translate-y-1/3 lg:z-10">
          <p class="text-3xl font-bold lg:text-5xl lg:pr-16">
            Innovation, Exploration, and Everything In Between
          </p>
          <p class="pt-8 pb-4 lg:pr-72 lg:text-lg lg:pt-12 lg:pb-10">
            Welcome to Nadia’s personal website, where I showcase my skills and
            expertise in software engineering.
          </p>
          <button class="bg-pink-500 px-6 py-2 lg:text-lg hover:bg-pink-600 transition-all lg:px-8 lg:py-3">Discover More</button>
        </div>
      </div>
      <div class="lg:w-4/5 lg:z-0">
        <img src="/hero.png" alt="Hero" class="lg:w-[1200px] lg:relative lg:left-24"/>
      </div>
    </div>
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