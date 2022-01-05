<template>
  <article>
    <h2>{{ title }}</h2>
    <div class="time-stats">
      <icon-stat icon="play_arrow" subheading="Start time">
        <p>{{ from.toLocaleString('nl-BE') }}</p>
      </icon-stat>
      <icon-stat icon="stop" subheading="Stop time">
        <p>{{ to.toLocaleString('nl-BE') }}</p>
      </icon-stat>
    </div>
    <div class="icon-stats">
      <icon-stat icon="speed" subheading="Avg. Speed">
        <loading-animation v-if="$fetchState.pending"/>
        <p v-else>{{avgSpeed}}</p>
      </icon-stat>
      <icon-stat icon="terrain" subheading="Avg. Height">
        <loading-animation v-if="$fetchState.pending"/>
        <p v-else>{{avgAlt}}</p>
      </icon-stat>
      <icon-stat icon="timeline" subheading="Distance">
        <p>20 km</p>
      </icon-stat>
      <icon-stat icon="two_wheeler" subheading="Max G-Force">
        <p>1 G</p>
      </icon-stat>
      <icon-stat icon="airline_seat_flat_angled" subheading="Max Angle">
        <p>45°</p>
      </icon-stat>
    </div>
    <div class="chart-gallery">
      <time-chart :series="speedSeries" title="Speed" y-format="{text} km/h" />
      <time-chart
        :series="altitudeSeries"
        title="Altitude"
        y-format="{text} m"
      />
    </div>
  </article>
</template>

<script>
import IconStat from './IconStat.vue'
import TimeChart from '~/components/chart/TimeChart.vue'
import LoadingAnimation from '~/components/LoadingAnimation.vue'
export default {
  name: 'Overview',
  components: { TimeChart, IconStat, LoadingAnimation },
  props: {
    title: {
      default: 'overview',
      type: String,
    },
    from: {
      default: () => new Date(1700, 1, 1),
      type: Date,
    },
    to: {
      default: () => new Date(),
      type: Date,
    },
  },
  data() {
    return {
      avgSpeed: '? KM/H',
      avgAlt: '? m',
      speedSeries: [
        {
          name: 'Avg. Speed',
          type: 'spline',
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
            },
          ],
        },
      ],
      altitudeSeries: [
        {
          name: 'Altitude',
          type: 'spline',
          data: [
            {
              x: new Date('November 1, 2021 07:30:00'),
              y: 0,
            },
            {
              x: new Date('November 1, 2021 07:45:00'),
              y: 10,
            },
            {
              x: new Date('November 1, 2021 08:00:00'),
              y: 20,
            },
            {
              x: new Date('November 1, 2021 08:15:00'),
              y: 15.5,
            },
            {
              x: new Date('November 1, 2021 08:30:00'),
              y: 13.5,
            },
            {
              x: new Date('November 1, 2021 08:45:00'),
              y: 20,
            },
            {
              x: new Date('November 1, 2021 09:00:00'),
              y: 30,
            },
            {
              x: new Date('November 1, 2021 09:15:00'),
              y: 45,
            },
            {
              x: new Date('November 1, 2021 09:30:00'),
              y: 43.3,
            },
          ],
        },
      ],
    }
  },
  async fetch() {
    this.avgSpeed = `${await this.$getAvgSpeed(process.env.UUID, this.from, this.to)} KM/H`
    this.avgAlt = `${await this.$getAvgAlt(process.env.UUID, this.from, this.to)} m`
  },
}
</script>

<style lang="scss" scoped>
.time-stats {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  gap: 1rem;
  margin-bottom: 2rem;
}

.icon-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
  @media only screen and (min-width: 600px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    margin-left: 10%;
    margin-right: 10%;
  }
}

.chart-gallery {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-content: center;
}
</style>
