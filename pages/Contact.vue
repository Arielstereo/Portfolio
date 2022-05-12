<template>
  <Background>
    <section class="py-48 md:py-40 md:h-screen flex flex-col text-center">
      <h2 class="text-4xl md:text-5xl py-12 dark:text-white">
        {{ data.contact.title }}
      </h2>
      <div class="card w-11/12 md:w-1/2 lg:w-1/3 md:py-2 bg-slate-800 dark:bg-slate-200">
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
        <div class="card__content m-auto py-20 md:py-5">
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
<style scoped>
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
