<template>
  <main>
    <hero-banner />
    <last-ride-overview/>
  </main>
</template>

<script>
import LastRideOverview from '~/components/LastRideOverview.vue'
import HeroBanner from '~/components/HeroBanner.vue'
export default {
  components: { HeroBanner, LastRideOverview },
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
