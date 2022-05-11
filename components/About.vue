<template>
  <section
    id="about"
    class="flex flex-col-reverse lg:flex-row items-center justify-content pt-72
      md:py-48 lg:h-screen bg-slate-100 dark:bg-slate-800"
  >
    <div class="card hidden lg:block lg:ml-64 my-8 bg-gradient-to-r from-sky-400 to-pink-400 hover:from-blue-600 hover:to-pink-500 hover:text-white">
      <div class="card-info">
        <div class="card-avatar my-5">
          <img src="./../assets/foto_perfil.png" alt="avatar" class="rounded-full">
        </div>
        <div class="card-title text-center text-sky-100 text-3xl">
          Ariel Martinez
        </div>
        <div class="card-subtitle text-md text-gray-900">
          Web Developer Jr.
        </div>
      </div>
      <ul class="card-social">
        <li class="card-social__item">
          <a href="mailto:arielstereo@msn.com">
            <i class="bx bx-mail-send bx-md" /></a>
        </li>
        <li class="card-social__item">
          <a href="https://github.com/Arielstereo" target="blank">
            <i class="bx bxl-github bx-md" /></a>
        </li>
        <li class="card-social__item">
          <a href="https://www.linkedin.com/in/ariel-mart%C3%ADnez-013507219/" target="blank">
            <i class="bx bxl-linkedin-square bx-md" /></a>
        </li>
      </ul>
    </div>
    <div class="flex flex-col md:justify-start items-center w-2/3">
      <h2 class="text-4xl md:text-5xl dark:text-white">
        About me
      </h2>
      <p class="text-lg text-justify text-gray-700 dark:text-white py-16 md:px-32">
        Hello! I am passionate about web programming, especially the frontend. In 2021 I trained at the National Technological University (UTN), completing a diploma in full stack development, complementing self-taught with online courses (udemy). At the beginning of 2022, I did an internship at the Equo company, where we developed the new website using Vue/Nuxt, Tailwind, Node, among other technologies. My dream is to join an IT company and continue training.
      </p>
      <a
        href="https://drive.google.com/file/d/1ZrMvaK-4RbtMOdOLiSgjOzWkf_tma3ot/view?usp=sharing"
        target="blank"
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
        Download CV
      </a>
    </div>
  </section>
</template>
<style scoped>
h2{
  font-family: 'Dela Gothic One';
}
.card {
 width: 320px;
 height: 450px;
 border-radius: 30px;
 padding: 2rem 1.5rem;
}

.card-info {
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
}
.card-avatar {
 width: 180px;
 height: 200px;
}

.card-social {
 display: flex;
 justify-content: space-around;
 width: 100%;
 opacity: 0;
}
.card-social__item {
 list-style: none;
 display: block;
}
.card:hover .card-social {
 transform: translateY(100%);
 opacity: 1;
}
.card-social__item :hover {
 color: black;
}
.btn{
  border-radius: 30px;
  line-height: 2em;
}
</style>
