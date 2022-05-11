<template>
  <section id="contact" class="py-52 md:py-40 md:h-screen flex flex-col text-center bg-slate-100 dark:bg-slate-800">
    <h2 class="text-4xl md:text-5xl py-16 md:pt-20 dark:text-white">
      {{ data.contact.title }}
    </h2>
    <div class="card w-11/12 md:w-1/2 md:pb-16 bg-black dark:bg-white">
      <div class="tools">
        <div class="circle">
          <span class="red box" />
        </div>
        <div class="circle">
          <span class="yellow box" />
        </div>
        <div class="circle">
          <span class="green box" />
        </div>
      </div>
      <div class="card__content m-auto py-20 md:py-20">
        <ul>
          <li class="text-white dark:text-black">
            <a href="mailto:arielstereo@msn.com">
              <i class="bx bx-mail-send bx-md" />  {{ data.contact.card.email }}</a>
          </li>
          <li class="text-white dark:text-black">
            <a href="https://www.linkedin.com/in/ariel-mart%C3%ADnez-013507219/" target="blank">
              <i class="bx bxl-linkedin-square bx-md" />  {{ data.contact.card.linkedin }}</a>
          </li>
          <li class="text-white dark:text-black">
            <a href="https://github.com/Arielstereo" target="blank">
              <i class="bx bxl-github bx-md" />  {{ data.contact.card.github }}</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
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
h2{
  font-family: 'Dela Gothic One';
}
li{
  font-size: 32px;
  padding: 5px;
}
li :hover{
  color:skyblue
}
.card {
 margin:auto;
 border-radius: 12px;
 z-index: 1;
}

.tools {
 display: flex;
 align-items: center;
 padding: 12px;
}

.circle {
 padding: 0 4px;
}

.box {
 display: inline-block;
 align-items: center;
 width: 10px;
 height: 10px;
 padding: 1px;
 border-radius: 50%;
}

.red {
 background-color: #ff605c;
}

.yellow {
 background-color: #ffbd44;
}

.green {
 background-color: #00ca4e;
}
</style>
