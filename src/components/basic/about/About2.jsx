import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import imageasset from "../../../assets/images/imageassets";

const About2 = () => {
	return (
		<div className="w-[100%] min-h-[150px] md:pt-[50px] pt-[10dvw] md:px-[50px] px-[10px] hidden md:flex flex-col items-center justify-start md:gap-[20px] gap-[2dvw]">
			<p className="font-heading md:text-[40px] text-[6dvw] mb-[2dvw] md:mb-[0px]">We Successfully Partnered With</p>
			<div className="w-[100%] md:h-[80px] h-[10dvw] rounded-[25px] bg-service-border-linear p-[1px]">
				<div className="w-[100%] h-[100%] rounded-[24px] bg-[#20172f] flex items-center justify-center px-[20px] py-[15px]">
					<Swiper
						modules={[Autoplay]}
						spaceBetween={50}
						loop={true}
						slidesPerView={5}
						autoplay={{ delay: 0, disableOnInteraction: false }}
						style={{ width: "100%", height: "100%" }}
						freeMode={false}
						speed={2000}
					>
						<SwiperSlide className="flex items-center justify-center">
							<img src={imageasset.Google} alt="Google" />
						</SwiperSlide>
						<SwiperSlide className="flex items-center justify-center">
							<img src="/images/indian/hcltech.png" className="h-full" />
						</SwiperSlide>
						<SwiperSlide className="flex items-center justify-center">
							<img src="/images/indian/Infosys.png" className="h-full" />
						</SwiperSlide>
						<SwiperSlide className="flex items-center justify-center">
							<img src="/images/indian/l&t.png" className="h-full" />
						</SwiperSlide>
						<SwiperSlide className="flex items-center justify-center">
							<img src="/images/indian/ltimindtree.png" className="h-full" />
						</SwiperSlide>
						<SwiperSlide className="flex items-center justify-center">
							<img src="/images/indian/mphasis.png" className="h-full bg-white" />
						</SwiperSlide>
						<SwiperSlide className="flex items-center justify-center">
							<img src="/images/indian/oracle.png" className="h-full" />
						</SwiperSlide>
						<SwiperSlide className="flex items-center justify-center">
							<img src="/images/indian/tcs.png" className="h-full" />
						</SwiperSlide>
						<SwiperSlide className="flex items-center justify-center">
							<img src="/images/indian/techmahindra.png" className="h-full" />
						</SwiperSlide>
						<SwiperSlide className="flex items-center justify-center">
							<img src="/images/indian/wipro.png" className="h-full" />
						</SwiperSlide>


					</Swiper>
				</div>

			</div>
		</div>
	)
}

export default About2