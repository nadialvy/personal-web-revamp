<script setup>
import SkillCard from '../widgets/SkillCard.vue';
</script>

<template>
  <div class="bg-purple-500">
    <div class="px-8 pt-8 pb-10">
      <p class="text-3xl text-white font-bold text-center lg:text-4xl lg:pb-8 xl:text-5xl 2xl:text-6xl">Skills</p>
      <p class="text-white text-center py-4">Through years of education and hands-on experience, I've honed a diverse range of skills that enable me to tackle complex challenges with confidence and creativity. Here are some of the skills I've developed:</p>

      <!-- card section -->
      <div class="flex">
        <div class="w-1/2">
          <SkillCard
            path="/skills/php_1.png"
            alt="PHP"
            hoverPath="/skills/php_2.png"
          />
        </div>
        <div class="w-1/2">
        </div>
      </div>
    </div>
  </div>
</template>