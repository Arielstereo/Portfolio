<template>
  <div :class="isDark ? 'dark' : ''">
    <nav id="start" class="shadow-xl py-8 bg-sky-50 dark:bg-slate-600">
      <div
        class="
        container
        flex
        items-center
        justify-center
        mx-auto
      "
      >
        <div class="w-full md:block md:w-auto">
          <button type="button" class="md:hidden absolute right-6 top-4" @click="openClose">
            <span v-if="isOpen">
              <i v-if="isDark" class="bx bx-x bx-md" style="color:#ffffff" />
              <i v-else class="bx bx-x bx-md" />
            </span>
            <span v-else>
              <i v-if="isDark" class="bx bx-menu-alt-left bx-md" style="color:#ffffff" />
              <i v-else class="bx bx-menu-alt-left bx-md" />
            </span>
          </button>
          <ul class="flex flex-col md:flex-row md:inline-flex justify-center text-center gap-4 md:gap-2" :class="[isOpen ? 'visible' : 'hidden']">
            <li>
              <img src="./../assets/logo.png" alt="logo" class="logo lg:mr-12 hidden lg:block">
            </li>
            <li v-for="link of Links" :key="link.name">
              <a
                :href="link.route"
                class="
                label
                inline-block
                px-5
                md:px-10
                mx-3
                py-2
                text-lg
                font-semibold
                shadow-lg
              text-gray-800 dark:text-gray-100 focus:bg-sky-300 rounded-full"
              >
                {{ link.name }}
              </a>
            </li>
            <li class="absolute left-6 top-5 md:relative md:top-0.5">
              <label class="switch mx-2">
                <input type="checkbox" @click="isDark = !isDark">
                <span class="slider" />
              </label>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Nuxt />
  </div>
</template>
<script>
export default {
  data () {
    return {
      Links: [
        {
          name: 'Home',
          route: '#home'
        },
        {
          name: 'About',
          route: '#about'
        },
        {
          name: 'Skills',
          route: '#skills'
        },
        {
          name: 'Contact',
          route: '#contact'
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
  nav{
    position: fixed;
    top: 0%;
    width: 100%;
  }
  .logo{
    width:55px;
    height: 50px
  }
  .switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
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
