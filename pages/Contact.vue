<template>
  <Background>
    <section class="flex flex-col items-center lg:justify-center lg:h-screen py-48 lg:pt-32">
      <Title>
        {{ data.contact.title }}
      </Title>
      <div class="flex flex-col justify-center items-center pt-5 dark:text-white">
        <img class="w-2/3 py-5" src="./../assets/img/contact_img.png" alt="img-contact">
        <ul class="flex flex-col md:flex-row gap-5 md:gap-20 mt-8 text-3xl">
          <li>
            <a class="flex items-center hover:text-red-600" href="mailto:arielstereo@msn.com">
              <i class="bx bx-mail-send bx-lg mx-2" />  {{ data.contact.links.email }}</a>
          </li>
          <li>
            <a class="flex items-center hover:text-yellow-600" href="https://www.linkedin.com/in/ariel-mart%C3%ADnez-013507219/" target="blank">
              <i class="bx bxl-linkedin-square bx-lg mx-2" />  {{ data.contact.links.linkedin }}</a>
          </li>
          <li>
            <a class="flex items-center hover:text-green-600" href="https://github.com/Arielstereo" target="blank">
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
