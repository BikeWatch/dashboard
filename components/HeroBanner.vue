<template>
  <article>
    <h1>Welcome back</h1>
    <div>
      <IconStat icon="speed" subheading="Avg. Speed">
        <p>106 km/h</p>
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
