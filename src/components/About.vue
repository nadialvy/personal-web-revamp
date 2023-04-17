<template>
  <img src="/about/el-planet.svg" alt="PLanet element" class="w-28 absolute right-0 lg:w-32 xl:w-52 2xl:w-64">
  <p class="text-3xl text-purple-500 px-8 pt-8 font-bold text-center lg:hidden">About</p>
  <div class="px-8 py-2 md:flex md:gap-x-4 xl:gap-x-8 lg:px-22 xl:px-32 2xl:px-72 2xl:gap-x-16 lg:mt-6">
    <div class="md:w-1/3 items-center md:justify-center">
      <img src="/about/main-pict.svg" alt="Self Picture" class="w-full animate-bounce animate-bounce-slow ease-in">
    </div>
    <div class="pt-8 text-purple-500 md:w-2/3 xl:text-xl 2xl:text-2xl">
      <p class="hidden lg:block text-purple-500 font-bold lg:text-4xl lg:pb-8 xl:text-5xl 2xl:text-6xl">About</p>
      <p class="font-semibold">Exploring my world of turning challenges into new comfort zones! My name is Nadia Lovely, and I am a Flutter Developer with a passion for pushing my limits. Over the past 2+ years, I've been learning the ins and outs of web programming with Laravel and VueJS.</p>
      <p class="py-4 font-semibold">Recently, I have been working as a Flutter Developer, gaining valuable experience and developing my skills after completing my internship at a start-up where I built mobile applications.</p>
      <p class="font-semibold">When I'm not coding, you can find me indulging in my love for k-pop, playing with stray cats, and listening to music.</p>
    </div>
  </div>
  <img src="/about/el-star.svg" alt="Star" class="w-44 lg:w-48 2xl:w-64">
</template>

<style>
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-7px);
  }
}

.animate-bounce-slow {
  animation: bounce 1.8s infinite;
}

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