export default (context, inject) => {
    inject('getAverageSpeed', async (uuid, from = new Date(1700, 1, 1), to = new Date()) => {
        const speed = await(await fetch(`${process.env.API_URL}/Speed/Avg?uuid=${uuid}&to=${to.toISOString()}&from=${from.toISOString()}`)).text()
        return Math.round(speed)
    })
}
