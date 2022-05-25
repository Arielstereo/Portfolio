<template>
  <Background>
    <section class="flex flex-col justify-center items-center xl:h-screen py-5 lg:pt-32">
      <Title>
        {{ data.skills.title }}
      </Title>
      <div class="flex flex-col lg:flex-row items-center md:justify-center mx-auto md:mx-48 p-16">
        <Card
          v-for="item in items"
          :key="item"
          :img="item.src"
          class="mx-2 my-2"
        />
      </div>
    </section>
  </Background>
</template>
<script>
import data from './../static/api/data.json'
export default {
  data () {
    return {
      data,
      items: [
        {
          src: require('./../assets/img/logo_html.png')
        },
        {
          src: require('./../assets/img/logo_vue.png')
        },
        {
          src: require('./../assets/img/logo_react.png')
        },
        {
          src: require('./../assets/img/logo_node.png')
        }
      ]

    }
  }
}
</script>
