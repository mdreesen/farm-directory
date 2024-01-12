const prod = 'production' === process.env.PROD_URL

module.exports = {
    'process.env.PROD_URL': prod ? process.env.PROD_URL : process.env.LOCAL_URL,
}