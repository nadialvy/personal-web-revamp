<template>
  <div
    class="mx-2 mt-4 xl:mt-6 xl:mx-3 p-8 flex justify-center items-center opacity-80 group text-white rounded-md transition-all duration-500 bg-gradient-to-tl from-pink-500 via-gray-900 to-purple-500 bg-size-200 bg-pos-0 hover:bg-pos-100 hover:cursor-pointer"
  >
    <img
      :src=path
      :alt=alt
      class="group-hover:hidden block group-hover:transition-all w-16"
    />
    <img
      :src=hoverPath
      :alt=alt
      class="group-hover:block hidden group-hover:transition-all w-16"
    />
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    alt: String,
    hoverPath: String,
  },
};
</script>
