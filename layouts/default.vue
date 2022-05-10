<template>
  <div :class="isDark ? 'dark' : ''">
    <nav id="start" class="shadow-xl py-8 bg-gradient-to-r from-sky-50 to-sky-100">
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
          <ul class="flex flex-wrap justify-center text-center gap-4">
            <li>
              <img src="./../assets/logo.png" alt="logo" class="logo lg:mr-12">
            </li>
            <li v-for="nav of navigation" :key="nav.label">
              <a
                :href="nav.route"
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
              text-gray-800 hover:text-white hover:bg-indigo-500 rounded-full
                "
              >
                {{ nav.label }}
              </a>
            </li>
            <li>
              <label class="switch my-1.5 mx-8">
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
      navigation: [
        {
          label: 'Home',
          route: '#home'
        },
        {
          label: 'About',
          route: '#about'
        },
        {
          label: 'Skills',
          route: '#skills'
        },
        {
          label: 'Contact',
          route: '#contact'
        }
      ],
      isDark: false
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
  /* --moon-mask: ; */
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
