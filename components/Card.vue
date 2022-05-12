<template>
  <div class="card">
    <div class="card2 bg-gray-800 dark:bg-sky-50 hover:bg-sky-200 dark:hover:bg-sky-200">
      <img :src="img" alt="logo" class="p-12">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    img: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped>
.card {
 width: 262px;
 height: 312px;
 background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
 border-radius: 20px;
 transition: all .3s;
 margin: 35px;
}

.card2 {
 width: 260px;
 height: 310px;
 border-radius:20px;
 transition: all .2s;
}

.card2:hover {
 transform: scale(0.98);
 border-radius: 30px;
}

.card:hover {
 box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
}
</style>
