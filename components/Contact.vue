<template>
  <section id="contact" class="py-52 md:h-screen flex flex-col text-center bg-slate-100 dark:bg-slate-800">
    <h2 class="text-5xl pb-10 dark:text-white">
      Contact me
    </h2>
    <div class="card bg-black dark:bg-white">
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
      <div class="card__content py-24">
        <ul>
          <li class="text-white dark:text-black">
            <a href="mailto:arielstereo@msn.com">
              <i class="bx bx-mail-send bx-md" />  arielstereo@msn.com</a>
          </li>
          <li class="text-white dark:text-black">
            <a href="https://www.linkedin.com/in/ariel-mart%C3%ADnez-013507219/" target="blank">
              <i class="bx bxl-linkedin-square bx-md" />  ArielMartinez</a>
          </li>
          <li class="text-white dark:text-black">
            <a href="https://github.com/Arielstereo" target="blank">
              <i class="bx bxl-github bx-md" />  Arielstereo</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<style scoped>
h2{
  font-family: 'Dela Gothic One';
}
li{
  font-size: 32px;
  padding: 5px;
}
li :hover{
  color:gray
}
.card {
 width: 500px;
 height: 500px;
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
