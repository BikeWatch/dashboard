<template>
  <div id="map-wrap" style="height: 30rem">
    <client-only v-if="coordinates">
      <l-map :zoom="10" :center="center">
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-marker :lat-lng="center" />
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

<style>
</style>
