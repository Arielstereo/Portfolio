<template>
  <Background>
    <section class="pt-5 lg:h-screen flex flex-col justify-center items-center">
      <h2 class="text-4xl md:text-5xl text-center dark:text-white mt-36">
        Technologies
      </h2>
      <div class="card dark:bg-white my-32 md:mt-8 w-11/12 md:w-1/2 lg:w-1/4">
        <h3>Git</h3>
        <h3>React</h3>
        <h3>MongoDB</h3>
        <h3>MySql</h3>
        <h3>Tailwind</h3>
        <h3>Bootstrap</h3>
      </div>
    </section>
  </Background>
</template>
<style scoped>
.card {
  height: 425px;
  position: relative;
  display: flex;
  flex-direction:column;
  place-content: center;
  place-items: center;
  overflow: hidden;
  border-radius: 20px;
}

.card h3 {
  z-index: 1;
  color: white;
  font-size: 2em;
}

.card::before {
  content: '';
  position: absolute;
  width: 100px;
  background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
  height: 130%;
  animation: rotBGimg 3s linear infinite;
  transition: all 0.2s linear;
}

@keyframes rotBGimg {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.card::after {
  content: '';
  position: absolute;
  background: #07182E;
  ;
  inset: 5px;
  border-radius: 15px;
}
</style>
