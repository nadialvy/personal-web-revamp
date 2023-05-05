<template>
  <div>
    <div class="block lg:hidden">
      <div class="w-full z-50 fixed">
        <nav :class="navbarClasses">
          <div class="flex items-start justify-between">
            
          </div>
        </nav>
      </div>
    </div>
    <div class="hidden lg:block">
      <div class="fixed w-full z-50">
        <nav :class="navbarClasses">
          <div class="flex items-center justify-between px-16 py-8">
            <div class="w-1/10">
              <img src="/logo.svg" alt="Logo" class="w-2/3">
            </div>
            <div class="w-8/10">
              <div class="flex gap-x-12 xl:gap-x-20 2xl:gap-x-40 text-white font-semibold text-md xl:text-lg hover:cursor-pointer">
                <p>About</p>
                <p>Skills</p>
                <p>Projects</p>
                <p>Experiences</p>
              </div>
            </div>
            <div class="w-1/10">
              <button class="border border-white py-1 px-4 text-white font-semibold hover:bg-pink-700 hover:border-pink-700">Contact</button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<style>
.drawer-container {
  /* make the position is translate x -100 */
  transform: translateX(-1000%);
}

.drawer-container.drawer-open .drawer-content {
  animation: slide-in .3s ease-out;
}

@keyframes slide-in {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
}

</style>

<script>
export default {
  data() {
    return {
      isScrolled: false,
      isDrawerOpen: false
    }
  },
  computed: {
    navbarClasses() {
      return {
        'bg-white': this.isScrolled,
        'bg-opacity-10': this.isScrolled,
        'backdrop-filter': this.isScrolled,
        'backdrop-blur-md': this.isScrolled,
        'text-white': this.isScrolled,
        'text-black': !this.isScrolled,
        'shadow-md': this.isScrolled,
        'shadow-none': !this.isScrolled,
        'transition-all': true,
        'duration-300': true
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.pageYOffset > 0
    },
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
    },
  }
}
</script>
