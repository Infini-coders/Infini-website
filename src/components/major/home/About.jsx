import Service3 from "../../basic/services/Service3"
import About1 from "../../basic/about/About1"
import About2 from "../../basic/about/About2"
import About3 from "../../basic/about/About3"
import About4 from "../../basic/about/About4"
import Details from "../../basic/Details/Details"

const About = () => {
	return (
		<div id="about" className="w-full md:min-h-[1500px] min-h-[10px] pt-[15dvw] md:pt-[70px] text-[white] md:pb-[150px] mb-[30dvw] md:mb-[0px]" >
			<About1 />
			<About2 />
			<About3 />
			<About4 />
			<Details />
			<Service3 />
		</div>
	)
}

export default About;