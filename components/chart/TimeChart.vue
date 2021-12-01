<!-- Note that the chart does scale downwards, but not upwards! -->

<template>
  <highchart :options="chartOptions" />
</template>

<script>
export default {
  name: 'TimeChart',
  props: {
    series: {
      // eslint-disable-next-line no-array-constructor
      default: new Array(
        { x: new Date('November 1, 2021 07:45:00'), y: 30 },
        { x: new Date('November 1, 2021 08:00:00'), y: 50 }
      ),
      type: Array,
    },
    title: {
      default: "Chart",
      type: String
    },
    yFormat: {
      default: "{text}",
      type: String
    }
  },
  data() {
    return {
      chartOptions: {
        chart: {
          backgroundColor: "#F8F8FF",
        },
        colors: ['#FF7A00'],
        credits: { enabled: false },
        title: {
          text: this.title,
          style: {
            'font-family': "'Inter', sans-serif;",
          },
        },
        yAxis: {
          labels: {
            format: this.yFormat,
          },
        },
        xAxis: {
          labels: {
            format: '{value: %H:%M}',
          },
        },
        series: this.series,
        tooltip: {
          valueSuffix: this.yFormat
        }
      },
    }
  }
}
</script>
