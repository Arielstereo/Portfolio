<template>
  <div :class="isDark ? 'dark' : ''">
    <nav id="start" class="shadow-xl py-8">
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
              text-gray-800 dark:text-white hover:text-white hover:bg-indigo-500 rounded-full
                "
              >
                {{ nav.label }}
              </a>
            </li>
            <li>
              <button class="lg:ml-12" @click="isDark = !isDark">
                Dark mode
              </button>
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
    width:65px;
    height: 60px
  }
  button {
  padding: 12px 25px;
  border: unset;
  border-radius: 25px;
  color: #212121;
  z-index: 1;
  background: #e8e8e8;
  position: relative;
  font-weight: 600;
  font-size: 16px;
  -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
  box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
  transition: all 250ms;
  overflow: hidden;
}

button::before {
 content: "";
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 width: 0;
 border-radius: 15px;
 background-color: #212121;
 z-index: -1;
 -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 transition: all 250ms
}

button:hover {
 color: #e8e8e8;
}

button:hover::before {
 width: 100%;
}
</style>
