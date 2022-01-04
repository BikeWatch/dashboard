export default (context, inject) => {
    inject('getAvgSpeed', async (uuid, from = new Date(1700, 1, 1), to = new Date()) => {
        const response = await fetchFloat(`${process.env.API_URL}/Speed/Avg?uuid=${uuid}&to=${to.toISOString()}&from=${from.toISOString()}`)
        return  response.toFixed(2)
    })
    inject('getMaxAlt', async (uuid, from = new Date(1700, 1, 1), to = new Date()) => { 
        const response = await fetchFloat(`${process.env.API_URL}/Elevation/Avg?uuid=${uuid}&to=${to.toISOString()}&from=${from.toISOString()}`)
        return response.toFixed(2)
    })
}

async function fetchFloat(url) { 
    const response = await fetch(url)
    return parseFloat(await response.text())
}
