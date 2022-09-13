import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Layout from "../components/layout"



export default function Home() {

  return (
    <div className="container">
      <Head>
        <title>林宇軒的島遊</title>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>


      <nav className='navBar'>

        <div >
          <Link href="/">
            <a className='navBarIcon'>
              <svg width="26" height="50" viewBox="0 0 26 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="26" height="50" />
                <path d="M19.6363 0.0718377C19.4018 -0.0457234 19.1366 -0.0114587 18.8628 0.119881C17.1046 0.963288 15.8673 2.70266 14.0577 3.42855C12.4813 4.06089 11.369 5.66105 10.7206 7.00628C10.2695 7.94232 10.4127 9.20263 9.64947 9.90619C9.49319 10.0502 9.29251 10.142 9.03694 10.142C7.92123 10.142 2.34264 19.6527 1.22692 23.0094C0.111204 26.3661 0.669073 24.6877 0.111215 29.1633C0.00155004 30.0432 -0.0205352 30.8059 0.0168167 31.4614C0.150292 33.8041 1.66897 35.94 2.49052 38.1371L2.90051 39.2335C3.08646 39.6064 4.01623 40.688 6.24766 42.0307C7.23547 42.6251 8.11396 43.3876 8.83474 44.1338C10.2121 45.5596 10.2454 48.9565 12.0224 49.8312C13.3501 50.4848 13.9002 49.1294 13.6316 47.6707C13.597 47.4827 13.5536 47.2813 13.4998 47.0658C13.1358 45.6053 13.4894 43.5492 13.834 42.2337C13.9682 41.7216 14.1756 41.2311 14.4174 40.7605C17.5645 34.6369 19.6565 33.0389 20.1941 31.9606C20.4145 31.5186 20.4764 29.1356 20.5705 28.6505C20.6804 28.084 20.752 27.3381 20.752 26.3661C20.752 24.7263 21.0576 23.015 21.429 21.5692C21.9253 19.6366 21.3277 16.8435 22.9834 15.7365C23.7252 15.2406 24.3871 14.0349 24.8931 12.8044C25.5552 11.1944 24.8757 9.4618 24.0991 7.90417C23.6529 7.00905 25.0289 4.92043 25.7727 3.98801C26.1446 3.61504 26.3306 2.75721 24.0991 2.30964C21.3099 1.75019 20.752 0.631289 19.6363 0.0718377Z" fill="#392A93" />
              </svg>
              <div className='wordArts'>
                <div className='taiwan'>taiwan</div>
                <div className='iconTitle'>島遊</div>
              </div>
            </a>
          </Link>
        </div>


        <div className='routeBtn'>
          <Link href="/posts/location">旅遊景點</Link>
        </div>

        <div className='routeBtn'>
          <Link href="/posts/restaurant">美食餐廳</Link>
        </div>

        <div className='serachGroup'>
          <input className='serachInput'
            type="serach"
            name=''
            placeholder="想去哪裡玩？"
          />
          <div className='serachBtn'>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.67976 2C5.01399 2 2.0423 4.91015 2.0423 8.5C2.0423 12.0899 5.01399 15 8.67976 15C12.3455 15 15.3172 12.0899 15.3172 8.5C15.3172 4.91015 12.3455 2 8.67976 2ZM0 8.5C0 3.80558 3.88606 0 8.67976 0C13.4735 0 17.3595 3.80558 17.3595 8.5C17.3595 10.5926 16.5873 12.5087 15.3067 13.9897L19.7009 18.2929C20.0997 18.6834 20.0997 19.3166 19.7009 19.7071C19.3021 20.0976 18.6556 20.0976 18.2568 19.7071L13.8127 15.3551C12.3751 16.3892 10.6003 17 8.67976 17C3.88606 17 0 13.1944 0 8.5Z" fill="#392A93" />
            </svg>
          </div>
        </div>

        <div className='switchLingtGroup'>
          <svg className='sunIcon' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11 0C11.5523 0 12 0.447715 12 1V3C12 3.55228 11.5523 4 11 4C10.4477 4 10 3.55228 10 3V1C10 0.447715 10.4477 0 11 0ZM3.5147 2.92897C3.90522 2.53845 4.53839 2.53845 4.92891 2.92897L6.34313 4.34319C6.73365 4.73371 6.73365 5.36688 6.34312 5.7574C5.9526 6.14792 5.31944 6.14792 4.92891 5.7574L3.5147 4.34319C3.12417 3.95266 3.12417 3.3195 3.5147 2.92897ZM19.0711 3.51476C19.4616 3.90528 19.4616 4.53845 19.0711 4.92897L17.6569 6.34319C17.2663 6.73371 16.6332 6.73371 16.2427 6.34319C15.8521 5.95266 15.8521 5.3195 16.2427 4.92897L17.6569 3.51476C18.0474 3.12423 18.6806 3.12423 19.0711 3.51476ZM11 7C8.79086 7 7 8.79086 7 11C7 13.2091 8.79086 15 11 15C13.2091 15 15 13.2091 15 11C15 8.79086 13.2091 7 11 7ZM5 11C5 7.68629 7.68629 5 11 5C14.3137 5 17 7.68629 17 11C17 14.3137 14.3137 17 11 17C7.68629 17 5 14.3137 5 11ZM0 11C0 10.4477 0.447715 10 1 10H3C3.55228 10 4 10.4477 4 11C4 11.5523 3.55228 12 3 12H1C0.447715 12 0 11.5523 0 11ZM18 11C18 10.4477 18.4477 10 19 10H21C21.5523 10 22 10.4477 22 11C22 11.5523 21.5523 12 21 12H19C18.4477 12 18 11.5523 18 11ZM16.2427 15.6569C16.6332 15.2664 17.2664 15.2664 17.6569 15.6569L19.0711 17.0711C19.4616 17.4616 19.4616 18.0948 19.0711 18.4853C18.6806 18.8758 18.0474 18.8758 17.6569 18.4853L16.2427 17.0711C15.8521 16.6806 15.8521 16.0474 16.2427 15.6569ZM6.34312 16.2427C6.73365 16.6332 6.73365 17.2664 6.34312 17.6569L4.92891 19.0711C4.53838 19.4616 3.90522 19.4616 3.5147 19.0711C3.12417 18.6806 3.12417 18.0474 3.51469 17.6569L4.92891 16.2427C5.31943 15.8521 5.9526 15.8521 6.34312 16.2427ZM11 18C11.5523 18 12 18.4477 12 19V21C12 21.5523 11.5523 22 11 22C10.4477 22 10 21.5523 10 21V19C10 18.4477 10.4477 18 11 18Z" fill="#392A93" />
          </svg>
          <div className='switchBtn' width="40" height="25">我是switch</div>
          {/* https://mui.com/zh/material-ui/react-switch/ */}
          <svg className='moonIcon' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.4985 0.632821C10.6583 1.03777 10.5378 1.49961 10.2005 1.77484C8.56256 3.11126 7.51946 5.14253 7.51946 7.41822C7.51946 11.4384 10.7785 14.6974 14.7987 14.6974C15.7983 14.6974 16.7485 14.4965 17.613 14.1337C18.0149 13.9651 18.4798 14.0762 18.7621 14.4084C19.0443 14.7407 19.0788 15.2175 18.8473 15.5868C17.0457 18.4618 13.8465 20.377 10.1991 20.377C4.56631 20.377 0 15.8107 0 10.1779C0 4.77969 4.19317 0.361738 9.50077 0.00230078C9.93514 -0.0271149 10.3386 0.227874 10.4985 0.632821ZM6.79825 2.71495C3.96757 4.00708 2 6.86294 2 10.1779C2 14.7061 5.67088 18.377 10.1991 18.377C12.0732 18.377 13.8008 17.7486 15.1823 16.6896C15.0551 16.6948 14.9272 16.6974 14.7987 16.6974C9.67391 16.6974 5.51946 12.543 5.51946 7.41822C5.51946 5.70172 5.98594 4.0939 6.79825 2.71495Z" fill="#392A93" />
          </svg>
        </div>

        <div className='lanChangeGroup'>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM7.71 17.667C6.72341 15.5743 6.15187 13.3102 6.027 11H2.062C2.25659 12.5389 2.89392 13.9882 3.89657 15.1717C4.89922 16.3552 6.22401 17.2221 7.71 17.667ZM8.03 11C8.181 13.439 8.878 15.73 10 17.752C11.1523 15.6766 11.8254 13.3695 11.97 11H8.03ZM17.938 11H13.973C13.8481 13.3102 13.2766 15.5743 12.29 17.667C13.776 17.2221 15.1008 16.3552 16.1034 15.1717C17.1061 13.9882 17.7434 12.5389 17.938 11ZM2.062 9H6.027C6.15187 6.68979 6.72341 4.42569 7.71 2.333C6.22401 2.77788 4.89922 3.64475 3.89657 4.8283C2.89392 6.01184 2.25659 7.4611 2.062 9ZM8.031 9H11.969C11.8248 6.6306 11.152 4.32353 10 2.248C8.84768 4.32345 8.17456 6.63052 8.03 9H8.031ZM12.29 2.333C13.2766 4.42569 13.8481 6.68979 13.973 9H17.938C17.7434 7.4611 17.1061 6.01184 16.1034 4.8283C15.1008 3.64475 13.776 2.77788 12.29 2.333Z" fill="#392A93" />
          </svg>
          <div className='lanTitle'>
            中文
          </div>
        </div>


      </nav>

      <div className="slideGroup">
        <div className='slideBtnPre'>
          <svg fill="none" viewBox="0 0 10 14"
            xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.200059 13.6001C-0.131312 13.1582 -0.0417684 12.5314 0.400059 12.2001L7.33339 7.00006L0.400059 1.80006C-0.0417689 1.46869 -0.131312 0.841886 0.200059 0.400059C0.53143 -0.0417692 1.15823 -0.131312 1.60006 0.200059L9.60006 6.20006C9.85186 6.38891 10.0001 6.6853 10.0001 7.00006C10.0001 7.31482 9.85186 7.6112 9.60006 7.80006L1.60006 13.8001C1.15823 14.1314 0.53143 14.0419 0.200059 13.6001Z" fill="#392A93" />
          </svg>
        </div>
        <div className="slider">
          <div className='slideItem'>

          </div>
          <div className='slideBtnsContainer'>
            <input className='slideBtns' type='radio' name="slide"></input>
            <input className='slideBtns' type='radio' name="slide"></input>
            <input className='slideBtns' type='radio' name="slide"></input>
            <input className='slideBtns' type='radio' name="slide"></input>
          </div>
        </div>
        <div className='slideBtnNex'>
          <svg fill="none" viewBox="0 0 10 14"
            xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.200059 13.6001C-0.131312 13.1582 -0.0417684 12.5314 0.400059 12.2001L7.33339 7.00006L0.400059 1.80006C-0.0417689 1.46869 -0.131312 0.841886 0.200059 0.400059C0.53143 -0.0417692 1.15823 -0.131312 1.60006 0.200059L9.60006 6.20006C9.85186 6.38891 10.0001 6.6853 10.0001 7.00006C10.0001 7.31482 9.85186 7.6112 9.60006 7.80006L1.60006 13.8001C1.15823 14.1314 0.53143 14.0419 0.200059 13.6001Z" fill="#392A93" />
          </svg>
        </div>
      </div>

      <div className='stackGruop'>

        <div className='stackBtnContainer'>

          <div className='stackBtn'>
            <input type='radio' name="city" id="北台灣" />
            <label className='stackBtnLb' htmlFor="北台灣">
              北台灣</label>
          </div>
          <div className='stackBtn'>
            <input type='radio' name="city" id="中台灣" />
            <label className='stackBtnLb' htmlFor="中台灣">中台灣
            </label>
          </div>
          <div className='stackBtn'>
            <input type='radio' name="city" id="南台灣" />
            <label className='stackBtnLb' htmlFor="南台灣">南台灣</label>
          </div>
          <div className='stackBtn'>
            <input type='radio' name="city" id="東台灣" />
            <label className='stackBtnLb' htmlFor="東台灣">東台灣</label>

          </div>
          <div className='stackBtn'>
            <input type='radio' name="city" id="離島" />
            <label className='stackBtnLb' htmlFor="離島">離島</label>

          </div>


        </div>
        <div className='stackSlide'>
          <div className='stackPre'>
            <svg fill="none" viewBox="0 0 10 14"
              xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.200059 13.6001C-0.131312 13.1582 -0.0417684 12.5314 0.400059 12.2001L7.33339 7.00006L0.400059 1.80006C-0.0417689 1.46869 -0.131312 0.841886 0.200059 0.400059C0.53143 -0.0417692 1.15823 -0.131312 1.60006 0.200059L9.60006 6.20006C9.85186 6.38891 10.0001 6.6853 10.0001 7.00006C10.0001 7.31482 9.85186 7.6112 9.60006 7.80006L1.60006 13.8001C1.15823 14.1314 0.53143 14.0419 0.200059 13.6001Z" fill="#FA7E5F" />
            </svg>
          </div>
          <div className='stackContainer'>
            <div className='stackItems'>
              <span>A</span>
            </div>
            <div className='stackItems'>
              <span>B</span>
            </div>
            <div className='stackItems'>
              <span>C</span>
            </div>
            <div className='stackItems'>
              <span>D</span>
            </div>
            <div className='stackItems'>
              <span>E</span>
            </div>
            <div className='stackItems'>
              <span>F</span>
            </div>
          </div>
          <div className='stackNex'>
            <svg fill="none" viewBox="0 0 10 14"
              xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.200059 13.6001C-0.131312 13.1582 -0.0417684 12.5314 0.400059 12.2001L7.33339 7.00006L0.400059 1.80006C-0.0417689 1.46869 -0.131312 0.841886 0.200059 0.400059C0.53143 -0.0417692 1.15823 -0.131312 1.60006 0.200059L9.60006 6.20006C9.85186 6.38891 10.0001 6.6853 10.0001 7.00006C10.0001 7.31482 9.85186 7.6112 9.60006 7.80006L1.60006 13.8001C1.15823 14.1314 0.53143 14.0419 0.200059 13.6001Z" fill="#FA7E5F" />
            </svg>
          </div>
        </div>
      </div>

      <div className='hotSpotGroup'>
        <div className='title'>
          熱門景點
        </div>
        <div className='hotSpotBtnContainer'>
          <button className='hotSpotBtnPre'>
            <svg fill="none" viewBox="0 0 10 14"
              xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.200059 13.6001C-0.131312 13.1582 -0.0417684 12.5314 0.400059 12.2001L7.33339 7.00006L0.400059 1.80006C-0.0417689 1.46869 -0.131312 0.841886 0.200059 0.400059C0.53143 -0.0417692 1.15823 -0.131312 1.60006 0.200059L9.60006 6.20006C9.85186 6.38891 10.0001 6.6853 10.0001 7.00006C10.0001 7.31482 9.85186 7.6112 9.60006 7.80006L1.60006 13.8001C1.15823 14.1314 0.53143 14.0419 0.200059 13.6001Z" fill="#FEFEFE" />
            </svg>
          </button>
          <button className='hotSpotBtnNex'>
            <svg fill="none" viewBox="0 0 10 14"
              xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.200059 13.6001C-0.131312 13.1582 -0.0417684 12.5314 0.400059 12.2001L7.33339 7.00006L0.400059 1.80006C-0.0417689 1.46869 -0.131312 0.841886 0.200059 0.400059C0.53143 -0.0417692 1.15823 -0.131312 1.60006 0.200059L9.60006 6.20006C9.85186 6.38891 10.0001 6.6853 10.0001 7.00006C10.0001 7.31482 9.85186 7.6112 9.60006 7.80006L1.60006 13.8001C1.15823 14.1314 0.53143 14.0419 0.200059 13.6001Z" fill="#FEFEFE" />
            </svg>
          </button>
        </div>
        <div className='hotSpotStackContainer'>
          <div className='hotSpotStackItem'>
            <div className='ItemPhoto'></div>
            <div className="spotTitle">我是景點名稱</div>
            <div className='spotCity'>我是城市</div>
          </div>
          <div className='hotSpotStackItem'>
            <div className='ItemPhoto'></div>
            <div className="spotTitle">我是景點名稱</div>
            <div className='spotCity'>我是城市</div>
          </div>
          <div className='hotSpotStackItem'>
            <div className='ItemPhoto'></div>
            <div className="spotTitle">我是景點名稱</div>
            <div className='spotCity'>我是城市</div>
          </div>
          <div className='hotSpotStackItem'>
            <div className='ItemPhoto'></div>
            <div className="spotTitle">我是景點名稱</div>
            <div className='spotCity'>我是城市</div>
          </div>
        </div>
      </div>

      <div className='hotFoodGroup'>
        <div className='title'>
          人氣美食
        </div>
        <div className='stackFoodContainer'>
          <div className='foodStackItem'>
            <div className='foodType'>中式美食</div>
          </div>
          <div className='foodStackItem'>
            <div className='foodType'>夜市小吃</div>
          </div>
          <div className='foodStackItem'>
            <div className='foodType'>異國料理</div>
          </div>
          <div className='foodStackItem'>
            <div className='foodType'>甜點冰品</div>
          </div>
          <div className='foodStackItem'>
            <div className='foodType'>伴手禮</div>
          </div>
          <div className='foodStackItem'>
            <div className='foodType'>全部類別</div>
          </div>


        </div>
      </div>

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




      <footer>
        <div className='logoContainer' >
          <Link href="/">
            <a className='navBarIcon'>
              <svg width="51" height="98" viewBox="0 0 51 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38.2728 0.140802C37.8158 -0.0896179 37.2988 -0.022459 36.7652 0.234967C33.3383 1.88805 30.9266 5.29721 27.3996 6.71997C24.3272 7.95934 22.1591 11.0957 20.8954 13.7323C20.0161 15.5669 20.2952 18.0372 18.8076 19.4161C18.503 19.6985 18.1119 19.8783 17.6138 19.8783C15.4391 19.8783 4.566 38.5192 2.39137 45.0984C0.216746 51.6775 1.30408 48.3879 0.216767 57.1601C0.00302116 58.8846 -0.0400248 60.3795 0.0327771 61.6644C0.292931 66.256 3.25296 70.4424 4.85424 74.7486L5.65334 76.8976C6.01577 77.6286 7.82796 79.7486 12.1772 82.3802C14.1025 83.5452 15.8148 85.0397 17.2197 86.5022C19.9042 89.2968 19.9692 95.9547 23.4326 97.6691C26.0205 98.9502 27.0926 96.2936 26.5692 93.4346C26.5018 93.0662 26.417 92.6713 26.3123 92.249C25.6027 89.3865 26.2921 85.3564 26.9637 82.7781C27.2251 81.7744 27.6294 80.813 28.1008 79.8906C34.2347 67.8882 38.3122 64.7563 39.3601 62.6428C39.7896 61.7764 39.9102 57.1057 40.0936 56.1549C40.3078 55.0447 40.4474 53.5828 40.4474 51.6775C40.4474 48.4636 41.0431 45.1095 41.7668 42.2755C42.7342 38.4878 41.5695 33.0132 44.7966 30.8435C46.2424 29.8715 47.5324 27.5083 48.5188 25.0966C49.8093 21.9411 48.4849 18.5451 46.9713 15.4922C46.1014 13.7377 48.7835 9.64403 50.2332 7.81649C50.9581 7.08547 51.3205 5.40413 46.9713 4.5269C41.5347 3.43037 40.4474 1.23733 38.2728 0.140802Z" fill="#FEFEFE" />
              </svg>
              <div className='wordArts'>
                <div className='taiwan'>taiwan</div>
                <div className='iconTitle'>島遊</div>
              </div>
            </a>
          </Link>
        </div>

        <div className="listContainer">
          <div className='footerList'>
            <ul>
              <a href="/#"><li>
                關於 Taiwan 台灣
              </li></a>
              <a href="/#"><li>
                我們是誰
              </li></a>
              <a href="/#"><li>
                加入我們
              </li></a>
              <a href="/#"><li>
                聯繫我們
              </li></a>
            </ul>
          </div>

          <div className='footerList'>
            <ul>
              <a href="/#"><li>
                服務條款
              </li></a>
              <a href="/#"><li>
                隱私權政策
              </li></a>
              <a href="/#"><li>
                ＦＡＱ
              </li></a>
            </ul>
          </div>

          <div className='footerList'>
            <ul>
              <a><li>
                追蹤我們
              </li></a>
              <a href="/#"><li>
                Facebook
              </li></a>
              <a href="/#"><li>
                Instgram
              </li></a>
              <a href="/#"><li>
                Line
              </li></a>
            </ul>
          </div>
        </div>

      </footer>
    </div >
  )
}
