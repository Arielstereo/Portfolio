<template>
  <section id="skills" class="pt-52 md:py-32 lg:h-screen flex flex-col justify-center bg-slate-50 dark:bg-slate-900 ">
    <h2 class="text-5xl text-center dark:text-white">
      Skills
    </h2>
    <div class="flex flex-col lg:flex-row mx-auto pt-12 items-center">
      <div class="card">
        <div class="card2">
          <img src="./../assets/logo_html.png" alt="logo" class="p-5">
        </div>
      </div>
      <div class="card">
        <div class="card2 flex items-center">
          <img src="./../assets/logo_vue.png" alt="logo">
        </div>
      </div>
      <div class="card">
        <div class="card2">
          <img src="./../assets/logo_node.png" alt="logo">
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
h2{
  font-family: 'Dela Gothic One';
}
.card {
 width: 262px;
 height: 312px;
 background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
 border-radius: 20px;
 transition: all .3s;
 margin: 20px;
}

.card2 {
 width: 260px;
 height: 310px;
 background-color: #1a1a1a;
 border-radius:20px;
 transition: all .2s;
}

.card2:hover {
 transform: scale(0.98);
 border-radius: 20px;
 background-color: #ffff;
}

.card:hover {
 box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
}
</style>
