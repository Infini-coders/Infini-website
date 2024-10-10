
const FooterHead = () => {
    return (
        <div className="absolute w-[85%] md:h-[100px] h-auto md:px-[0px] md:py-[0px] px-[15px] py-[5px] md:top-[-50px] top-[-15dvw] translate-x-[-50%] left-[50%] rounded-[80px] md:border-[3px] border-[1px] border-[rgba(255,255,255,0.3)] flex flex-row items-center justify-around bg-footer-linear">
            <p className="text-[white] md:text-[170%] text-[3dvw] font-bold">Ready To Get Started</p>
            <p className="text-[white] text-[170%] font-bold md:block hidden">Contact Us Today</p>
            <button className="text-[#0020FF] md:text-[140%] text-[3dvw] rounded-[80px] md:px-[25px] md:py-[5px] px-[20px] py-[3px] border bg-button-radial">Get Started</button>

        </div>
    )
}

export default FooterHead