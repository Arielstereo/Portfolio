<template>
  <Background>
    <section class="gap-8 p-16 lg:p-32 flex flex-col justify-center items-center">
      <Title>
        {{ data.education.title }}
      </Title>
      <h3 class="text-4xl md:text-5xl text-center dark:text-white my-3">
        {{ data.education.subtitle }}
      </h3>
      <img class="w-3/4 lg:w-1/4 rounded-full" src="./../assets/img/utn_logo.jpg" alt="logo_utn">
      <div class="card p-8 w-full lg:w-1/2 h-full bg-slate-800 dark:bg-slate-100">
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
        <div class="flex flex-col md:flex-row md:gap-5 items-center justify-center">
          <h4 class="text-2xl text-slate-50 dark:text-gray-800 flex text-center items-center">
            {{ data.education.card.title }}
          </h4>
          <Btn secondary href="https://drive.google.com/file/d/1JzCLDMCLU5NNKONPgTcIwS248PNJYNy6/view?usp=sharing" target="_blank" class="my-5">
            {{ data.education.card.btn }}
          </Btn>
        </div>
        <div class="flex flex-col md:flex-row items-center md:justify-center gap-5 md:gap-16 m-6">
          <div>
            <ul class="text-xl text-slate-50 dark:text-gray-800">
              <li class="flex items-center">
                <i class="bx bxl-html5 bx-md" /> Html
              </li>
              <li class="flex items-center">
                <i class="bx bxl-css3 bx-md" /> Css
              </li>
              <li class="flex items-center">
                <i class="bx bxl-javascript bx-md" /> JavaScript
              </li>
              <li class="flex items-center">
                <i class="bx bxl-nodejs bx-md" /> Node.Js
              </li>
            </ul>
          </div>
          <div>
            <ul class="text-xl text-slate-50 dark:text-gray-800">
              <li class="flex items-center">
                <i class="bx bxl-git bx-md" /> Git
              </li>
              <li class="flex items-center">
                <i class="bx bxl-mongodb bx-md" />MongoDB
              </li>
              <li class="flex items-center">
                <i class="bx bxl-react bx-md" /> React
              </li>
              <li class="flex items-center">
                <i class="bx bxl-bootstrap bx-md" /> Bootstrap
              </li>
            </ul>
          </div>
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
.card {
 border-radius: 8px;
 z-index: 1;
}
.tools {
 display: flex;
 align-items: center;
 padding: 9px;
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
