<template>
  <img src="/about/el-planet.svg" alt="PLanet element" class="w-28 absolute right-0">
  <p class="text-3xl text-purple-500 px-8 pt-8 font-bold text-center">About</p>
  <div class="px-8 py-2">
    <div class="">
      <img src="/about/main-pict.svg" alt="Self Picture" class="w-full animate-bounce animate-bounce-slow ease-in">
    </div>
    <div class="pt-8 text-purple-500">
      <p class="font-semibold">Exploring my world of turning challenges into new comfort zones! My name is Nadia Lovely, and I am a Flutter Developer with a passion for pushing my limits. Over the past 2+ years, I've been learning the ins and outs of web programming with Laravel and VueJS.</p>
      <p class="py-4 font-semibold">Recently, I have been working as a Flutter Developer, gaining valuable experience and developing my skills after completing my internship at a start-up where I built mobile applications.</p>
      <p class="font-semibold">When I'm not coding, you can find me indulging in my love for k-pop, playing with stray cats, and listening to music.</p>
    </div>
  </div>
  <img src="/about/el-star.svg" alt="Star" class="w-44">
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