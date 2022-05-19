<template>
  <a
    class="button"
    :class="[primary ? ' px-7 py-4 text-slate-50 bg-slate-800/90 hover:bg-sky-500 dark:bg-slate-50 hover:dark:bg-sky-500 dark:text-slate-800 hover:dark:text-slate-50 shadow-xl rounded-3xl ':'',
             secondary ? 'px-4 py-2 text-slate-50 bg-red-500/90 hover:bg-sky-500 hover:dark:bg-sky-500hover:dark:text-slate-50 shadow-xl rounded-md' : '']"
    :href="href"
    :target="target"
  >
    <slot />
  </a>
</template>
<script>
export default {
  props: {
    href: {
      type: String,
      default: ''
    },
    target: {
      type: String,
      default: ''
    },
    primary: {
      type: Boolean,
      default: false
    },
    secondary: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped>
.button {
 text-transform: uppercase;
 font-size: 18px;
 transition: all .5s ease;
 cursor: pointer;
 font-family: "Roboto Slab";
}

.button:hover {
 letter-spacing: 3px;
 box-shadow: 0px 14px 56px -11px #1875FF;
}

.button:active {
 letter-spacing: 3px;
 background-color: hsl(261deg 80% 48%);
 box-shadow: 0px 14px 56px -11px #1875FF;
 transform: translateY(10px);
 transition: 100ms;
}
</style>
