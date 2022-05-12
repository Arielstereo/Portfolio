<template>
  <header
    class="
      flex flex-col
      md:flex-row
      justify-content
      items-center
      py-32
      md:py-12
      md:h-screen"
  >
    <div class="text-center pt-32 w-full lg:w-3/4">
      <h1 class="text-5xl lg:text-6xl dark:text-white pb-6">
        {{ data.header.name }}
      </h1>
      <p class="text-base md:text-lg text-gray-500 dark:text-slate-300">
        {{ data.header.occupation }}
      </p>
      <div class="flex justify-center py-6">
        <a class="button" href="mailto:arielstereo@msn.com">
          <div class="svg-wrapper-1">
            <div class="svg-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" />
              </svg>
            </div>
          </div>
          <span>Contact me</span>
        </a>
      </div>
    </div>
    <img src="../assets/dev.svg" alt="img" class="w-2/3 md:w-1/2 py-12 md:mr-12 lg:mr-32 :mt-10">
  </header>
</template>
<script>
import data from './../static/api/data.json'
export default {
  data () {
    return {
      data
    }
  }
}
</script>
<style scoped>
.button {
 font-family: inherit;
 font-size: 20px;
 background: royalblue;
 color: white;
 padding: 0.7em 1em;
 padding-left: 0.9em;
 display: flex;
 align-items: center;
 border: none;
 border-radius: 16px;
 overflow: hidden;
 transition: all 0.2s;
}

.button span {
 display: block;
 margin-left: 0.3em;
 transition: all 0.3s ease-in-out;
}

.button svg {
 display: block;
 transform-origin: center center;
 transition: transform 0.3s ease-in-out;
}

.button:hover .svg-wrapper {
 animation: fly-1 0.6s ease-in-out infinite alternate;
}

.button:hover svg {
 transform: translateX(1.2em) rotate(45deg) scale(1.1);
}

.button:hover span {
 transform: translateX(5em);
}

.button:active {
 transform: scale(0.95);
}

@keyframes fly-1 {
 from {
  transform: translateY(0.1em);
 }

 to {
  transform: translateY(-0.1em);
 }
}

</style>
