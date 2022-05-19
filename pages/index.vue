<!-- Home Page -->
<template>
  <Background>
    <header
      class="
      flex flex-col
      md:flex-row
      justify-content
      items-center
      md:h-screen
      py-16
      md:py-5
      "
    >
      <div class="text-center w-full lg:w-3/4">
        <h1 class="text-5xl lg:text-6xl text-slate-900/90 dark:text-white/90 pb-6 animate__animated animate__backInLeft">
          {{ data.header.name }}
        </h1>
        <p class="text-base md:text-lg text-gray-500 dark:text-slate-300 animate__animated animate__zoomIn">
          {{ data.header.occupation }}
        </p>
        <div class="flex justify-center py-8">
          <Btn primary href="mailto:arielstereo@msn.com" target="_blank">
            {{ data.header.btn }}
          </Btn>
        </div>
      </div>
      <img src="../assets/img/dev.svg" alt="img" class="w-2/3 md:w-1/2 py-12 md:mr-12 lg:mr-32 :mt-10">
    </header>
  </Background>
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
