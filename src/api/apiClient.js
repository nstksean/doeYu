import queryString from "query-string";
const baseUrl = 'https://tdx.transportdata.tw/api/basic/'


/**
 * 觀光景點資料
 * @param {city} string
 * @param {query} object
 *  */
const scenicSpot = `${baseUrl}v2/Tourism/ScenicSpot`
export const getScenicSpotUrl = (city, query) => {
    // 取得指定[縣市]觀光景點資料
    if (city !== '')
        return `${scenicSpot}/${city}?${queryString.stringify(query)}`
    // 取得所有觀光景點資料
    else return `${scenicSpot}?${queryString.stringify(query)}`

}



// todo
export const restaurant = `${baseUrl}v2/Tourism/Restaurant`