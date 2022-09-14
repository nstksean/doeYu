export default function Stacks() {
    return (
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
    );
}