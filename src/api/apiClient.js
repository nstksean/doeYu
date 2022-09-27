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



/**
 * 觀光餐廳資料
 * @param {city} string
 * @param {query} object
 */

const restaurantSpot = `${baseUrl}v2/Tourism/Restaurant`
export const getRestaurantUrl = (city, query) => {
    //取得指定[縣市]觀光餐廳資料
    if (city !== '')
        return `${restaurantSpot}/${city}?${queryString.stringify(query)}`
    //取得所有觀光餐廳資料
    else return `${restaurantSpot}?${queryString.stringify(query)}`
}

/**
 * 觀光旅館資料
 * @param {city} string
 * @param {query} object
 */

const hotelSpot = `${baseUrl}v2/Tourism/Hotel`
export const getHotelUrl = (city, query) => {
    //取得指定[縣市]觀光旅館資料
    if (city !== '')
        return `${hotelSpot}/${city}?${queryString.stringify(query)}`
    //取得所有觀光旅館資料
    else return `${hotelSpot}?${queryString.stringify(query)}`

}