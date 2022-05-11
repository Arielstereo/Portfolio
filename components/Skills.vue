<template>
  <section id="skills" class="pt-52 md:py-48 lg:h-screen flex flex-col justify-center bg-slate-50 dark:bg-slate-900 ">
    <h2 class="text-4xl md:text-5xl text-center dark:text-white">
      {{ data.skills.title }}
    </h2>
    <div class="flex flex-col lg:flex-row mx-auto pt-12 items-center">
      <Card
        v-for="item in items"
        :key="item"
        :img="item.src"
      />
    </div>
  </section>
</template>
<script>
import data from './../static/api/data.json'
export default {
  data () {
    return {
      data,
      items: [
        {
          src: require('./../assets/logo_html.png')
        },
        {
          src: require('./../assets/logo_vue.png')
        },
        {
          src: require('./../assets/logo_node.png')
        }
      ]

    }
  }
}
</script>
<style scoped>
h2{
  font-family: 'Dela Gothic One';
}
</style>
