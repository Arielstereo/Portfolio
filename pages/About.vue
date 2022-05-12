<template>
  <Background>
    <section class="flex flex-col-reverse lg:flex-row items-center justify-content pt-72 md:py-48 lg:h-screen">
      <div class="card hidden lg:block lg:ml-64 my-8 bg-gradient-to-r from-sky-400 to-pink-400 hover:from-blue-600 hover:to-pink-500 hover:text-white">
        <div class="card-info">
          <div class="card-avatar my-5">
            <img src="./../assets/foto_perfil.png" alt="avatar" class="rounded-full">
          </div>
          <div class="card-title text-center text-sky-100 text-3xl">
            {{ data.about.card.name }}
          </div>
          <div class="card-subtitle text-md text-gray-900">
            {{ data.about.card.occupation }}
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
          {{ data.about.title }}
        </h2>
        <p class="text-lg text-justify text-gray-700 dark:text-white py-16 md:px-32">
          {{ data.about.description }}
        </p>
        <a class="download-button" target="_blank" href="https://drive.google.com/file/d/1ZrMvaK-4RbtMOdOLiSgjOzWkf_tma3ot/view?usp=sharing">
          <div class="docs">
            <svg
              class="css-i6dzq1"
              stroke-linejoin="round"
              stroke-linecap="round"
              fill="none"
              stroke-width="2"
              stroke="currentColor"
              height="20"
              width="20"
              viewBox="0 0 24 24"
            ><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line y2="13" x2="8" y1="13" x1="16" /><line y2="17" x2="8" y1="17" x1="16" /><polyline points="10 9 9 9 8 9" /></svg>Download CV
          </div>
          <div class="download">
            <svg
              class="css-i6dzq1"
              stroke-linejoin="round"
              stroke-linecap="round"
              fill="none"
              stroke-width="2"
              stroke="currentColor"
              height="24"
              width="24"
              viewBox="0 0 24 24"
            ><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line y2="3" x2="12" y1="15" x1="12" /></svg>
          </div>
        </a>
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
.download-button {
 position: relative;
 color: white;
 font-size: 15px;
 font-weight: 300;
 border-radius: 45px;
 z-index: 1;
}

.download-button .docs {
 display: flex;
 align-items: center;
 justify-content: space-between;
 gap: 10px;
 min-height: 60px;
 padding: 0 10px;
 border-radius: 45px;
 z-index: 1;
 background-color: #1b1d20;
 border: solid 1px #02f36ad3;
 transition: all .5s cubic-bezier(0.77, 0, 0.175, 1);
}

.download-button:hover {
 box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.download {
 position: absolute;
 inset: 0;
 display: flex;
 align-items: center;
 justify-content: center;
 max-width: 70%;
 margin: 0 auto;
 z-index: -1;
 border-radius: 4px;
 transform: translateY(0%);
 background-color: #01e056;
 border: solid 1px #01e0572d;
 transition: all .5s cubic-bezier(0.77, 0, 0.175, 1);
}

.download-button:hover .download {
 transform: translateY(100%)
}

.download svg polyline,.download svg line {
 animation: docs 1s infinite;
}

@keyframes docs {
 0% {
  transform: translateY(0%);
 }

 50% {
  transform: translateY(-15%);
 }

 100% {
  transform: translateY(0%);
 }
}
</style>
