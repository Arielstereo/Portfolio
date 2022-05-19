<template>
  <Background>
    <section class="h-screen flex flex-col pt-16 lg:pt-32 items-center md:justify-center">
      <Title>
        {{ data.contact.title }}
      </Title>
      <div class="flex flex-col justify-center items-center pt-5 dark:text-white">
        <img class="w-2/3 py-5" src="./../assets/img/contact_img.png" alt="img-contact">
        <ul class="flex flex-col md:flex-row gap-5 md:gap-20 mt-8">
          <li>
            <a class="flex items-center text-3xl hover:text-sky-600" href="mailto:arielstereo@msn.com">
              <i class="bx bx-mail-send bx-lg mx-2" />  {{ data.contact.links.email }}</a>
          </li>
          <li>
            <a class="flex items-center text-3xl hover:text-sky-600" href="https://www.linkedin.com/in/ariel-mart%C3%ADnez-013507219/" target="blank">
              <i class="bx bxl-linkedin-square bx-lg mx-2" />  {{ data.contact.links.linkedin }}</a>
          </li>
          <li>
            <a class="flex items-center text-3xl hover:text-sky-600" href="https://github.com/Arielstereo" target="blank">
              <i class="bx bxl-github bx-lg mx-2" />  {{ data.contact.links.github }}</a>
          </li>
        </ul>
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
 border-radius: 12px;
 z-index: 1;
}

.tools {
 display: flex;
 align-items: center;
 padding: 5px;
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
