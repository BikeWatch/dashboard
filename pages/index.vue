<template>
  <main>
    <hero-banner />
    <article>
      <time-chart :series="series" title="Avg. Speed on Last Ride"/>
    </article>
  </main>
</template>

<script>
import TimeChart from '~/components/chart/TimeChart.vue'
import HeroBanner from '~/components/HeroBanner.vue'
export default {
  components: { TimeChart, HeroBanner },
  data() {
    return {
      series: [
        {
          name: 'Avg. Speed',
          data: [
            {
              x: new Date('November 1, 2021 07:30:00'),
              y: 0,
            },
            {
              x: new Date('November 1, 2021 07:45:00'),
              y: 30,
            },
            {
              x: new Date('November 1, 2021 08:00:00'),
              y: 50,
            },
            {
              x: new Date('November 1, 2021 08:15:00'),
              y: 45,
            },
            {
              x: new Date('November 1, 2021 08:30:00'),
              y: 90,
            },
            {
              x: new Date('November 1, 2021 08:45:00'),
              y: 120,
            },
            {
              x: new Date('November 1, 2021 09:00:00'),
              y: 140,
            },
            {
              x: new Date('November 1, 2021 09:15:00'),
              y: 50,
            },
            {
              x: new Date('November 1, 2021 09:30:00'),
              y: 0,
            }],
        },
      ],
    }
  },
}
</script>

<style lang="scss">
article:not(:first-of-type) {
  background-color: ghostwhite;
}
</style>
