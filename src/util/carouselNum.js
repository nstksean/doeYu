
/** 
 * 輪播圖輪播數
 * @param {itemNum} number
 * 
*/

export const function cycleNum({ itemNum, activeTab, addOrSub }) {

    if (activeTab < 1) {
        return activeTab = itemNum - 1
    } else if (activeTab > itemNum - 2) {
        return activeTab = 0
    } else {
        return activeTab += addOrSub
    }
}

