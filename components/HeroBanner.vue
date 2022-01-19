<template>
  <article>
    <h1>Welcome back</h1>
    <div>
      <IconStat icon="speed" subheading="Avg. Speed">
        <LoadingAnimation v-if="$fetchState.pending" />
        <p v-else>{{ avgSpeed }}</p>
      </IconStat>
      <IconStat icon="terrain" subheading="Highest Altitude">
        <LoadingAnimation v-if="$fetchState.pending" />
        <p v-else>{{ maxAlt }}</p>
      </IconStat>
      <IconStat icon="timeline" subheading="Distance">
        <LoadingAnimation v-if="$fetchState.pending" />
        <p v-else>{{ distance }}</p>
      </IconStat>
      <icon-stat
        icon="airline_seat_flat_angled"
        subheading="Held Optimal Angle"
      >
        <LoadingAnimation v-if="$fetchState.pending" />
        <p v-else>{{ optimalAngle }}</p>
      </icon-stat>
    </div>
  </article>
</template>

<script>
export default {
  name: 'HeroBanner',
  data() {
    return {
      avgSpeed: '? KM/H',
      maxAlt: '? m',
      distance: '? km',
      optimalAngle: '? %',
    }
  },
  async fetch() {
    this.avgSpeed = `${await this.$getAvgSpeed(process.env.UUID)} KM/H`
    this.maxAlt = `${await this.$getMaxAlt(process.env.UUID)} m`
    this.distance = `${await this.$getDistance(process.env.UUID)} km`
    this.optimalAngle = `${await this.$getOptimalAngle(process.env.UUID)} %`
  },
}
</script>

<style lang="scss" scoped>
article {
  margin: 5rem;
  h1 {
    text-align: center;
    margin-bottom: 5rem;
  }
  div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1rem;
    @media only screen and (min-width: 600px) {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
      margin-left: 10%;
      margin-right: 10%;
    }
  }
}
</style>
