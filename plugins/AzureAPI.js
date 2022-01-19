export default (context, inject) => {
  inject(
    'getAvgSpeed',
    async (uuid, from = new Date(1700, 1, 1), to = new Date()) => {
      const response = await fetchFloat(
        `${
          process.env.API_URL
        }/Speed/Avg?uuid=${uuid}&to=${to.toISOString()}&from=${from.toISOString()}`
      )
      return response.toFixed(2)
    }
  )
  inject(
    'getMaxAlt',
    async (uuid, from = new Date(1700, 1, 1), to = new Date()) => {
      const response = await fetchFloat(
        `${
          process.env.API_URL
        }/Elevation/Max?uuid=${uuid}&to=${to.toISOString()}&from=${from.toISOString()}`
      )
      return response.toFixed(2)
    }
  )
  inject(
    'getDistance',
    async (uuid, from = new Date(1700, 1, 1), to = new Date()) => {
      const response = await fetchFloat(
        `${
          process.env.API_URL
        }/Distance?uuid=${uuid}&to=${to.toISOString()}&from=${from.toISOString()}`
      )
      return response.toFixed(2)
    }
  )
  inject(
    'getAvgAlt',
    async (uuid, from = new Date(1700, 1, 1), to = new Date()) => {
      const response = await fetchFloat(
        `${
          process.env.API_URL
        }/Elevation/Avg?uuid=${uuid}&to=${to.toISOString()}&from=${from.toISOString()}`
      )
      return response.toFixed(2)
    }
  )
  inject(
    'getMaxAngle',
    async (uuid, from = new Date(1700, 1, 1), to = new Date()) => {
      const response = await fetchFloat(
        `${
          process.env.API_URL
        }/Angle/Max?uuid=${uuid}&to=${to.toISOString()}&from=${from.toISOString()}`
      )
      return response.toFixed(2)
    }
  )
  inject(
    'getContinuousSpeed',
    async (
      uuid,
      intervalSeconds = 60,
      from = new Date(1700, 1, 1),
      to = new Date()
    ) => {
      const response = await fetchJson(
        `${
          process.env.API_URL
        }/continuous/Speed?uuid=${uuid}&to=${to.toISOString()}&from=${from.toISOString()}&interval=${intervalSeconds}`
      )
      return mapToSeries(response, 'dateTime', 'speed')
    }
  )
  inject(
    'getContinuousAlt',
    async (
      uuid,
      intervalSeconds = 60,
      from = new Date(1700, 1, 1),
      to = new Date()
    ) => {
      const response = await fetchJson(
        `${
          process.env.API_URL
        }/continuous/Elevation?uuid=${uuid}&to=${to.toISOString()}&from=${from.toISOString()}&interval=${intervalSeconds}`
      )
      return mapToSeries(response, 'dateTime', 'alt')
    }
  )
  inject(
    'getContinuousLocation',
    async (
      uuid,
      intervalSeconds = 60,
      from = new Date(1700, 1, 1),
      to = new Date()
    ) => {
      const response = await fetchJson(
        `${
          process.env.API_URL
        }/continuous/Location?uuid=${uuid}&to=${to.toISOString()}&from=${from.toISOString()}&interval=${intervalSeconds}`
      )
      return mapToLeafletCoordinates(response, 'lat', 'long')
    }
  )
  inject('getOptimalAngle', async (uuid) => {
    const response = await fetchPrediction(
      `https://bikewatchai.azurewebsites.net/api/getprediction?code=gJYDkZIzodXL1HFJzmTwzg8hrzVz5Dr9vTpSAfwPCsnTPGYPpaFFng==&uuid=${uuid}`
    )

    return response
  })
}

async function fetchFloat(url) {
  const response = await fetch(url)
  return parseFloat(await response.text())
}

async function fetchJson(url) {
  const response = await fetch(url)
  return response.json()
}

async function fetchPrediction(url) {
  const dummyData = require('../static/data.json')
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(dummyData),
  })

  return response.text()
}

function mapToSeries(array, replacementX, replacementY) {
  return array.map((entry) => ({
    x: Date.parse(entry[replacementX]),
    y: entry[replacementY],
  }))
}

function mapToLeafletCoordinates(array, latKey, longKey) {
  return array.map((entry) => [entry[latKey], entry[longKey]])
}
