<template>
  <main>
    <hero-banner />
    <overview :title="'Last 24 hours'" :from="from" :to="to" :interval="(60*30)"/>
  </main>
</template>

<script>
import Overview from '~/components/Overview.vue'
import HeroBanner from '~/components/HeroBanner.vue'
export default {
  components: { HeroBanner, Overview },
  data() {
    return{
      to: new Date(),
      from: new Date(new Date().setDate(new Date().getDate() - 1))
    }
  }
}
</script>

<style lang="scss">
article:not(:first-of-type) {
  background-color: ghostwhite;
  border-radius: 10px;
  padding: 2rem;
  margin-left: 5%;
  margin-right: 5%;
  @media only screen and (min-width: 600px) {
    margin-left: 10%;
    margin-right: 10%;
  }
}
</style>
