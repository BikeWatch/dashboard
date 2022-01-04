<template>
  <article>
    <h1>Welcome back</h1>
    <div>
      <IconStat icon="speed" subheading="Avg. Speed">
        <p>{{ avgSpeed }}</p>
      </IconStat>
      <IconStat icon="terrain" subheading="Highest Altitude">
        <p>250m</p>
      </IconStat>
      <IconStat icon="timeline" subheading="Distance">
        <p>40km</p>
      </IconStat>
      <IconStat icon="timer" subheading="Time spent">
        <p>1h 05min</p>
      </IconStat>
    </div>
  </article>
</template>

<script>
export default {
  name: 'HeroBanner',
  data() {
    return {
      avgSpeed: '? KM/H',
    }
  },
  async fetch() {
    this.avgSpeed = await this.getAvgSpeed(process.env.UUID)
  },
  methods: {
    async getAvgSpeed(uuid, from = new Date(1700, 1, 1), to=new Date()) {
      const speed = await (await fetch(`${process.env.API_URL}/Speed/Avg?uuid=${uuid}&to=${to.toISOString()}&from=${from.toISOString()}`)).text()
      return `${Math.round(speed)} KM/H`.toString()
    },
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
