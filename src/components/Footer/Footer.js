import Link from 'next/link'
import style from './footer.module.css'

export default function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.logoContainer}>
                <Link href="/">
                    <a>
                        <svg
                            viewBox="0 0 147 98"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M38.2728 0.140802C37.8158 -0.0896179 37.2988 -0.022459 36.7652 0.234967C33.3383 1.88805 30.9266 5.29721 27.3996 6.71997C24.3272 7.95934 22.1591 11.0957 20.8954 13.7323C20.0161 15.5669 20.2952 18.0372 18.8076 19.4161C18.503 19.6985 18.1119 19.8783 17.6138 19.8783C15.4391 19.8783 4.566 38.5192 2.39137 45.0984C0.216746 51.6775 1.30408 48.3879 0.216767 57.1601C0.00302116 58.8846 -0.0400248 60.3795 0.0327771 61.6644C0.292931 66.256 3.25296 70.4424 4.85424 74.7486L5.65334 76.8976C6.01577 77.6286 7.82796 79.7486 12.1772 82.3802C14.1025 83.5452 15.8148 85.0397 17.2197 86.5022C19.9042 89.2968 19.9692 95.9547 23.4326 97.6691C26.0205 98.9502 27.0926 96.2936 26.5692 93.4346C26.5018 93.0662 26.417 92.6713 26.3123 92.249C25.6027 89.3865 26.2921 85.3564 26.9637 82.7781C27.2251 81.7744 27.6294 80.813 28.1008 79.8906C34.2347 67.8882 38.3122 64.7563 39.3601 62.6428C39.7896 61.7764 39.9102 57.1057 40.0936 56.1549C40.3078 55.0447 40.4474 53.5828 40.4474 51.6775C40.4474 48.4636 41.0431 45.1095 41.7668 42.2755C42.7342 38.4878 41.5695 33.0132 44.7966 30.8435C46.2424 29.8715 47.5324 27.5083 48.5188 25.0966C49.8093 21.9411 48.4849 18.5451 46.9713 15.4922C46.1014 13.7377 48.7835 9.64403 50.2332 7.81649C50.9581 7.08547 51.3205 5.40413 46.9713 4.5269C41.5347 3.43037 40.4474 1.23733 38.2728 0.140802Z"
                                fill="#FEFEFE"
                            />
                            <path
                                d="M91.9186 74.2843H86.2663V69.4627H82.9139V74.2843H77.1836V70.5211H73.8701V77.1459H91.9186V78.2827H95.1931V70.4427H91.9186V74.2843ZM97.6489 49.2355V51.5875H80.8089V49.2355H97.6489ZM80.8089 56.2523V53.9787H97.6489V56.2523H80.8089ZM107.083 64.0531V61.2699H80.8089V58.8787H101.274V46.6091H89.8916C90.3984 45.7467 90.9441 44.8059 91.3339 43.8259L87.0849 43.4339C86.89 44.3355 86.5002 45.5507 86.1104 46.6091H77.2225V68.9139H101.976C101.547 73.5787 101.079 75.4995 100.495 76.0875C100.222 76.4011 99.8709 76.5187 99.2862 76.5187C98.7015 76.5187 97.3371 76.4795 95.8558 76.3227C96.3236 77.1851 96.6354 78.5179 96.7134 79.4587C98.5065 79.5371 100.105 79.5371 101.001 79.4195C102.015 79.3411 102.795 79.0667 103.457 78.2827C104.471 77.2243 105.055 74.3627 105.601 67.5419C105.679 67.1107 105.718 66.1699 105.718 66.1699H80.8089V64.0531H107.083Z"
                                fill="#FEFEFE"
                            />
                            <path
                                d="M123.689 55.6251C123.689 60.0939 123.299 66.4835 119.83 71.1091C120.531 71.5403 121.584 72.5203 122.09 73.1083C125.365 68.9531 126.3 63.3083 126.534 58.5651H129.692C129.38 66.7971 129.068 69.8155 128.483 70.5211C128.25 70.9523 127.938 71.0307 127.509 71.0307C127.041 71.0307 126.145 71.0307 125.092 70.9131C125.482 71.7363 125.794 72.9907 125.833 73.8923C127.119 73.9315 128.289 73.9315 129.029 73.8139C129.965 73.6963 130.549 73.3827 131.173 72.5595C132.07 71.3443 132.421 67.5811 132.849 56.9187V55.5467H126.573V51.7835H133.044C132.693 52.2931 132.382 52.7635 132.031 53.1947C132.771 53.6651 134.019 54.6059 134.565 55.1547L134.876 54.7235V56.3699H141.075C140.256 57.3107 139.281 58.2515 138.424 58.8787V61.3875H133.59V64.2883H138.424V70.2467C138.424 70.6387 138.307 70.7563 137.839 70.7563C137.41 70.7563 135.968 70.7563 134.409 70.7171C134.876 71.5795 135.344 72.8731 135.5 73.7355C137.683 73.7355 139.164 73.6963 140.217 73.1867C141.269 72.7163 141.503 71.7755 141.503 70.2859V64.2883H146.415V61.3875H141.503V59.7019C143.102 58.3299 144.739 56.6051 146.025 54.9587L144.037 53.4691L143.452 53.6259H135.578C136.124 52.7243 136.592 51.7835 137.059 50.7643H146.454V47.7459H138.307C138.736 46.6091 139.164 45.3939 139.437 44.2179L136.397 43.3555C135.734 46.2171 134.643 49.0787 133.317 51.3131V48.7259H129.38L129.575 48.6867C129.224 47.3147 128.405 45.1979 127.665 43.5907L124.507 44.1787C125.092 45.5899 125.716 47.3931 126.067 48.7259H120.492V51.7835H123.689V55.6251ZM119.401 49.6275C118.465 48.0203 116.594 45.5115 114.996 43.6299L112.189 45.1195C113.709 47.0403 115.581 49.7843 116.477 51.4307L119.401 49.6275ZM119.128 62.0539L118.582 62.1323H115.464C117.491 59.4667 120.063 55.5467 121.545 53.3123L119.167 52.3323L118.66 52.5675H111.098V55.5075H116.594C115.113 57.7811 113.242 60.4859 112.501 61.2699C111.838 62.0147 111.254 62.2891 110.63 62.4459C110.981 63.1123 111.643 64.7587 111.838 65.5819C112.189 65.2683 113.203 64.9939 114.177 64.9939H117.101C116.009 70.6779 113.67 74.8331 110.357 77.1459C111.059 77.6555 112.267 78.8707 112.735 79.6547C114.567 78.2043 116.165 76.2835 117.452 73.7355C120.492 78.1259 125.209 78.9099 132.81 78.9099C137.176 78.9099 142.049 78.7923 145.83 78.5571C146.025 77.6163 146.454 75.9699 147 75.1859C142.868 75.5779 136.942 75.7739 132.849 75.7739C125.833 75.7739 121.155 75.1467 118.777 70.7171C119.635 68.3651 120.297 65.6995 120.726 62.6811L119.128 62.0539Z"
                                fill="#FEFEFE"
                            />
                            <path
                                d="M75.9931 18.8512H72.1865V16.9108H82.0099V18.8512H78.2033V29.4H75.9931V18.8512Z"
                                fill="#9086CC"
                            />
                            <path
                                d="M86.898 28.3239H86.8454C86.6349 28.7002 86.2958 29.0119 85.828 29.2588C85.3602 29.494 84.8281 29.6116 84.2317 29.6116C83.8925 29.6116 83.5359 29.5646 83.1616 29.4705C82.7991 29.3882 82.46 29.2471 82.1442 29.0472C81.8402 28.8355 81.5829 28.565 81.3724 28.2357C81.1736 27.8947 81.0742 27.4772 81.0742 26.9833C81.0742 26.3482 81.2496 25.8426 81.6004 25.4662C81.9629 25.0899 82.4249 24.8018 82.9862 24.6019C83.5476 24.402 84.1674 24.2726 84.8456 24.2138C85.5356 24.1432 86.2081 24.108 86.8629 24.108V23.8963C86.8629 23.3671 86.67 22.979 86.2841 22.732C85.9098 22.4733 85.4596 22.344 84.9334 22.344C84.489 22.344 84.0621 22.438 83.6528 22.6262C83.2435 22.8144 82.9044 23.0437 82.6354 23.3142L81.5478 22.0264C82.0273 21.5796 82.5769 21.2444 83.1967 21.021C83.8282 20.7975 84.4656 20.6858 85.1088 20.6858C85.8572 20.6858 86.4712 20.7916 86.9507 21.0033C87.4418 21.215 87.8277 21.4914 88.1084 21.8324C88.3891 22.1734 88.582 22.5556 88.6873 22.979C88.8042 23.4024 88.8627 23.8257 88.8627 24.2491V29.4H86.898V28.3239ZM86.8629 25.5368H86.3893C86.0502 25.5368 85.6935 25.5544 85.3193 25.5897C84.945 25.6132 84.6001 25.6779 84.2843 25.7838C83.9686 25.8778 83.7054 26.019 83.4949 26.2071C83.2844 26.3835 83.1792 26.6305 83.1792 26.948C83.1792 27.1479 83.2201 27.3184 83.302 27.4596C83.3955 27.5889 83.5125 27.6948 83.6528 27.7771C83.7931 27.8594 83.951 27.9182 84.1264 27.9535C84.3018 27.9888 84.4773 28.0064 84.6527 28.0064C85.3777 28.0064 85.9274 27.8124 86.3016 27.4243C86.6758 27.0362 86.8629 26.507 86.8629 25.8367V25.5368Z"
                                fill="#9086CC"
                            />
                            <path
                                d="M91.3502 20.9328H93.4552V29.4H91.3502V20.9328ZM91.052 18.0574C91.052 17.7164 91.1748 17.4224 91.4204 17.1754C91.6777 16.9167 91.9993 16.7874 92.3852 16.7874C92.7711 16.7874 93.0927 16.9108 93.35 17.1578C93.6189 17.393 93.7534 17.6929 93.7534 18.0574C93.7534 18.422 93.6189 18.7278 93.35 18.9747C93.0927 19.2099 92.7711 19.3275 92.3852 19.3275C91.9993 19.3275 91.6777 19.204 91.4204 18.9571C91.1748 18.6984 91.052 18.3985 91.052 18.0574Z"
                                fill="#9086CC"
                            />
                            <path
                                d="M94.8161 20.9328H97.0965L98.8507 27.0009H98.8858L100.693 20.9328H102.938L104.762 27.0009H104.797L106.587 20.9328H108.779L105.867 29.4H103.727L101.815 23.4729H101.78L99.8856 29.4H97.7455L94.8161 20.9328Z"
                                fill="#9086CC"
                            />
                            <path
                                d="M115.335 28.3239H115.282C115.072 28.7002 114.733 29.0119 114.265 29.2588C113.797 29.494 113.265 29.6116 112.669 29.6116C112.329 29.6116 111.973 29.5646 111.598 29.4705C111.236 29.3882 110.897 29.2471 110.581 29.0472C110.277 28.8355 110.02 28.565 109.809 28.2357C109.61 27.8947 109.511 27.4772 109.511 26.9833C109.511 26.3482 109.686 25.8426 110.037 25.4662C110.4 25.0899 110.862 24.8018 111.423 24.6019C111.984 24.402 112.604 24.2726 113.282 24.2138C113.972 24.1432 114.645 24.108 115.3 24.108V23.8963C115.3 23.3671 115.107 22.979 114.721 22.732C114.347 22.4733 113.896 22.344 113.37 22.344C112.926 22.344 112.499 22.438 112.09 22.6262C111.68 22.8144 111.341 23.0437 111.072 23.3142L109.985 22.0264C110.464 21.5796 111.014 21.2444 111.634 21.021C112.265 20.7975 112.902 20.6858 113.546 20.6858C114.294 20.6858 114.908 20.7916 115.387 21.0033C115.879 21.215 116.265 21.4914 116.545 21.8324C116.826 22.1734 117.019 22.5556 117.124 22.979C117.241 23.4024 117.3 23.8257 117.3 24.2491V29.4H115.335V28.3239ZM115.3 25.5368H114.826C114.487 25.5368 114.13 25.5544 113.756 25.5897C113.382 25.6132 113.037 25.6779 112.721 25.7838C112.405 25.8778 112.142 26.019 111.932 26.2071C111.721 26.3835 111.616 26.6305 111.616 26.948C111.616 27.1479 111.657 27.3184 111.739 27.4596C111.832 27.5889 111.949 27.6948 112.09 27.7771C112.23 27.8594 112.388 27.9182 112.563 27.9535C112.739 27.9888 112.914 28.0064 113.09 28.0064C113.815 28.0064 114.364 27.8124 114.738 27.4243C115.113 27.0362 115.3 26.507 115.3 25.8367V25.5368Z"
                                fill="#9086CC"
                            />
                            <path
                                d="M119.752 20.9328H121.752V22.291H121.787C121.974 21.8677 122.296 21.4972 122.752 21.1797C123.219 20.8504 123.769 20.6858 124.401 20.6858C124.95 20.6858 125.418 20.7858 125.804 20.9857C126.201 21.1738 126.523 21.4267 126.769 21.7442C127.026 22.0617 127.213 22.4263 127.33 22.8379C127.447 23.2495 127.505 23.6728 127.505 24.108V29.4H125.4V24.7077C125.4 24.4608 125.383 24.202 125.348 23.9316C125.313 23.6611 125.237 23.42 125.12 23.2083C125.003 22.9849 124.839 22.8026 124.629 22.6615C124.43 22.5204 124.161 22.4498 123.822 22.4498C123.483 22.4498 123.19 22.5204 122.945 22.6615C122.699 22.7908 122.494 22.9614 122.331 23.173C122.179 23.3847 122.062 23.6317 121.98 23.9139C121.898 24.1844 121.857 24.4608 121.857 24.743V29.4H119.752V20.9328Z"
                                fill="#9086CC"
                            />
                        </svg>
                    </a>
                </Link>
            </div>

            <div className={style.listContainer}>
                <div className={style.footerList}>
                    <ul>
                        <li>關於 Taiwan 台灣</li>
                        <li>我們是誰</li>
                        <li>加入我們</li>
                        <li>聯繫我們</li>
                    </ul>
                </div>
                <div className={style.line375}></div>
                <div className={style.footerList}>
                    <ul>
                        <li>服務條款</li>
                        <li>隱私權政策</li>
                        <li>ＦＡＱ</li>
                    </ul>
                </div>

                <div className={style.footerList}>
                    <ul>
                        <li>追蹤我們</li>
                        <li>Facebook</li>
                        <li>Instgram</li>
                        <li>Line</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
