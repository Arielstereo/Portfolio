<template>
  <div :class="isDark ? 'dark' : ''">
    <Background>
      <!--Navbar-->
      <nav class="lg:fixed top-0 shadow-xl w-full py-8 lg:py-6 bg-gradient-to-l lg:from-sky-400 to-transparent">
        <div
          class="
        container
        flex
        items-center
        justify-center
        mx-auto
      "
        >
          <div class="w-full lg:block md:w-auto">
            <!--Menu mobile-->
            <button type="button" class="lg:hidden absolute right-6 top-8" @click="openClose">
              <span v-if="isOpen">
                <i v-if="isDark" class="bx bx-x bx-md dark:text-slate-50" />
                <i v-else class="bx bx-x bx-md" />
              </span>
              <span v-else class="flex">
                <i v-if="isDark" class="bx bx-menu-alt-left bx-md dark:text-slate-50" />
                <i v-else class="bx bx-menu-alt-left bx-md" />
              </span>
            </button>
            <span v-if="!isOpen" class="flex gap-3 items-center ml-3 lg:hidden">
              <img class="w-10" src="./../assets/img/logo.png" alt="logo">
              <h6 class="text-2xl font-semibold dark:text-slate-50">Ariel Martinez</h6>
            </span>
            <ul class="flex flex-wrap lg:inline-flex pt-8 lg:pt-0 justify-center" :class="[isOpen ? 'visible' : 'hidden']">
              <li class="hidden xl:block mx-5">
                <Spinner />
              </li>
              <li v-for="link of Links" :key="link.name">
                <nuxt-link
                  :to="link.route"
                  class="
                inline-block
                px-2
                md:px-5
                lg:px-10
                mx-3
                py-2
                text-lg
                font-semibold
              text-slate-800 dark:text-slate-50 focus:bg-sky-900 focus:text-slate-100 focus:dark:bg-slate-100 focus:dark:text-slate-700 rounded-full  hover:bg-slate-100 hover:dark:bg-sky-900"
                >
                  {{ link.name }}
                </nuxt-link>
              </li>
              <li class="absolute lg:relative left-2 top-5  lg:top-2 lg:mx-5">
                <!-- Toggle switch -->
                <label class="switch text-sm lg:text-base m-3 lg:m-auto">
                  <input type="checkbox" @click="isDark = !isDark">
                  <span class="slider" />
                </label>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Nuxt />
      <Footer />
    </Background>
  </div>
</template>
<script>
export default {
  data () {
    return {
      Links: [
        {
          name: 'Home',
          route: '/'
        },
        {
          name: 'About',
          route: '/about'
        },
        {
          name: 'Skills',
          route: '/skills'
        },
        {
          name: 'Education',
          route: '/education'
        },
        {
          name: 'Contact',
          route: '/contact'
        }
      ],
      isDark: false,
      isOpen: false
    }
  },
  methods: {
    openClose () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
<style scoped>
  .switch {
  position: relative;
  display: inline-block;
  width: 4em;
  height: 2em;
  }
  .switch input {
  opacity: 0;
  width: 0;
  height: 0;
  }
  .slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #faf16aa3;
  transition: .4s;
  border-radius: 30px;
  }

  .slider:before {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  border-radius: 20px;
  left: 0.3em;
  bottom: 0.3em;
  background: linear-gradient(40deg,#ff0080,#ff8c00 70%);
  ;
  transition: .4s;
  }

  input:checked + .slider {
  background-color: #303136;
  }

  input:checked + .slider:before {
  transform: translateX(1.5em);
  background: #303136;
  box-shadow: inset -3px -2px 5px -2px #8983f7, inset -10px -5px 0 0 #a3dafb;
  }
</style>
