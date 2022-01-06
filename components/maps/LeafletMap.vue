<template>
  <div style="height: 30rem">
    <client-only v-if="coordinates">
      <l-map :zoom="13" :center="center">
        <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <l-marker :lat-lng="center">
          <l-tooltip>Last recorded location</l-tooltip>
        </l-marker>
        <l-polyline :lat-lngs="coordinates" color="orange" />
      </l-map>
    </client-only>
    <p v-else>No location data yet available...</p>
  </div>
</template>

<script>
export default {
  name: 'LeafletMap',
  props: {
    coordinates: {
      default: () => [],
      type: Array,
    },
    center: {
      default: () => [],
      type: Array,
    },
  },
}
</script>

<style lang="scss" scoped>
div{
    border-radius: 10px;
}
</style>
