export default function Subscript() {
    return (
        <form>
            <div className='subscriptGruop'>

                <div className='title'>
                    訂閱我們，獲得最在地的旅遊資訊！
                </div>
                <div className='subTitle'>
                    每週六一封，不隨意打擾，且隨時可以取消
                </div>
                <div className='inputer'>
                    <input type="e-mail" placeholder='輸入你的 Email' />
                    <button type='submit'>訂閱</button>
                </div>

            </div>
        </form>
    )
}