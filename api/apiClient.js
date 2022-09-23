import queryString from "query-string";
const baseUrl = 'https://tdx.transportdata.tw/api/basic/'


// 取得所有觀光景點資料
/**
 * @param {city} string
 * @param {query} object
 *  */
const scenicSpot = `${baseUrl}v2/Tourism/ScenicSpot`
export const getScenicSpotUrl = (city, query) => {
    if (city !== '')
        return `${scenicSpot}/${city}?${queryString.stringify(query)}`

    else return `${scenicSpot}?${queryString.stringify(query)}`

}


// /v2/Tourism/ScenicSpot/{City}

//取得所有觀光餐飲資料
export const restaurant = `${baseUrl}v2/Tourism/Restaurant`