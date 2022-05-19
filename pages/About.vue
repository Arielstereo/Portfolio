<template>
  <Background>
    <section class="flex flex-col lg:flex-row items-center justify-content py-8 lg:my-0 lg:h-screen">
      <div class="avatar px-5 lg:ml-56">
        <img src="./../assets/img/foto_perfil.png" alt="avatar" class="rounded-full">
      </div>
      <div class="flex flex-col md:justify-start items-center w-2/3">
        <Title>
          {{ data.about.title }}
        </Title>
        <p class="text-lg text-justify text-gray-700 dark:text-white py-16 md:px-32">
          {{ data.about.description }}
        </p>
        <Btn primary href="https://drive.google.com/file/d/1ZrMvaK-4RbtMOdOLiSgjOzWkf_tma3ot/view?usp=sharing" target="_blank">
          {{ data.about.btn }}
        </Btn>
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
.avatar {
 width: 340px;
 height: 320px;
 border-radius:37% 63% 31% 69% / 56% 83% 17% 44% ;
 background-image: radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%);
}
.avatar img {
  margin: 55px;
  width: 65%;
}
</style>
