<template>
  <header
    id="home"
    class="
      flex flex-col
      md:flex-row
      justify-content
      items-center
      py-32
      md:py-12
      md:h-screen
      bg-slate-50
      dark:bg-slate-900
    "
  >
    <div class="text-center pt-32 w-full lg:w-3/4">
      <h1 class="text-5xl lg:text-6xl dark:text-white pb-6">
        Ariel Martinez
      </h1>
      <p class="text-base md:text-lg text-gray-500 dark:text-slate-300">
        Developer / Programmer / Frontend
      </p>
      <div>
        <a
          href="#contact"
          class="
                btn
                inline-block
                px-5
                md:px-10
                mx-3
                mt-5
                py-2
                rounded-md
                text-md text-gray-800
                font-medium
                bg-gradient-to-r from-sky-400 to-pink-400 hover:from-blue-600 hover:to-pink-500 hover:text-white
              "
        >
          Contact me
        </a>
      </div>
    </div>
    <img src="../assets/dev.svg" alt="img" class="w-2/3 md:w-1/2 py-12 md:mr-12 lg:mr-32">
  </header>
</template>
<style scoped>
h1 {
  font-family: "Dela Gothic One";
}
.btn{
  border-radius: 30px;
  line-height: 2em;
}
</style>
