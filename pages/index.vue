<template>
  <main>
    <article class="card-selection">
      <p>
        Displaying information for
        <select id="uuid" name="uuid" @change="setUUID($event)">
          <option value="bc-87-72-17">Card 1</option>
          <option value="ed-36-o2-po">Card 2</option>
          <option value="zc-19-mb-a1">Card 3</option>
        </select>
      </p>
    </article>
    <hero-banner :key="uuid" :uuid="uuid"/>
    <overview :key="uuid" :title="'Last 24 hours'" :from="from" :to="to" :interval="60 * 30" :uuid="uuid"/>
  </main>
</template>

<script>
import Overview from '~/components/Overview.vue'
import HeroBanner from '~/components/HeroBanner.vue'
export default {
  components: { HeroBanner, Overview },
  data() {
    return {
      to: new Date(),
      from: new Date(new Date().setDate(new Date().getDate() - 1)),
      uuid: 'bc-87-72-17',
    }
  },
  methods: {
    setUUID(e) {
      this.uuid = e.target.value
    },
  },
}
</script>

<style lang="scss">
.card-selection{
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: fit-content;
  select{
    border: none;
  }
}
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
