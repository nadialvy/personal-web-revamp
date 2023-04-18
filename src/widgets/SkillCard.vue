<template>
  <div
    class="bg-gray-100 w-32 rounded-lg overflow-hidden shadow-lg relative transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-xl"
  >
    <div
      class="bg-white p-6 hover:bg-card group transition-all ease-in-out duration-700 flex flex-col justify-center items-center"
    >
      <img
        :src=path
        :alt=alt
        class="group-hover:hidden block transition-all"
      />
      <img
        :src=hoverPath
        :alt=alt
        class="group-hover:block hidden transition-all"
      />
    </div>
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