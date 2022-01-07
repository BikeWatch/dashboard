<template>
  <div>
    <select @change="(e) => $emit('change-uuid', e.target.value)">
      <option disabled value="">Select a UUID</option>
      <option value="2c-17-1b-49">2c-17-1b-49</option>
      <option>2c-17-1b-10</option>
    </select>
    <span>Selected: {{ uuid }}</span>
  </div>
</template>

<script>
export default {
  props: {
    uuid: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      uuids: ['2c-17-1b-49', 'ed-36-o2-po', 'zc-19-mb-a1'],
    }
  },
  // After getting all the possible uuids the uuid should be set to the first one as default
}
</script>

<style>
</style>