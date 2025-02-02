import Menu from "@mui/icons-material/Menu";
import imageasset from "../../../assets/images/imageassets"
import { useState } from "react"
import DialogNavbar from "../../basic/navbar/DialogNavbar";

const navbar = ({ setAboutvisibility }) => {

	const [index, setIndex] = useState(0);
	const [openStatus, setOpenStatus] = useState(false);

	const handleOpen = () => {
		setOpenStatus(true);
	}

	const handleClose = () => {
		setOpenStatus(false);
	}

	return (
		<div className="w-full md:h-[65px] h-[15dvw] md:px-[50px] px-[20px] flex flex-row items-center justify-between bg-[#0b021ca1] fixed z-[5] backdrop-blur-[10px]">
			<img src={imageasset.logo1} className="md:h-[55px] h-[90%]" />
			<div className="w-[500px] h-[50px] hidden md:flex flex-row items-center justify-between relative text-[white]">
				<div className="border w-[125px] flex items-center justify-center h-[90%] rounded-[80px] border-[white] absolute z-[-1]"
					style={{ transform: `translatex(${index * 125}px)`, transition: "0.3s" }}
				>
				</div>
				<div className="w-[125px] flex items-center justify-center h-full cursor-pointer font-bold text-[white]"
					key={0}
					onClick={() => {
						setIndex(0);
						setAboutvisibility(false);
						setTimeout(() => {
							document.getElementById("home").scrollIntoView({ behavior: "smooth" });
						}, 500);
					}}
				>
					HOME
				</div>
				<div className="w-[125px] flex items-center justify-center h-full cursor-pointer font-bold"
					key={1}
					onClick={() => {
						setIndex(1);
						setAboutvisibility(false);
						setTimeout(() => {
							document.getElementById("services").scrollIntoView({ behavior: "smooth" });
						}, 500);
					}}

				>
					SERVICES
				</div>
				<div className="w-[125px] flex items-center justify-center h-full cursor-pointer font-bold"
					key={2}
					onClick={() => {
						setIndex(2);
						setAboutvisibility(true);
						setTimeout(() => {
							document.getElementById("about").scrollIntoView({ behavior: "smooth" });
						}, 500);
					}}
				>
					ABOUT
				</div>
				<div className="w-[125px] flex items-center justify-center h-full cursor-pointer font-bold"
					key={3}
					onClick={() => {
						setIndex(3);
						setTimeout(() => {
							document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
						}, 500);
					}}
				>
					CONTACT
				</div>
			</div>
			<div className="w-[10dvw] h-[63%] md:hidden flex items-center justify-center">
				<Menu className="text-[white]" sx={{ width: "100%", height: "100%" }} onClick={handleOpen} />
			</div>
			<DialogNavbar open={openStatus} onClose={handleClose} index={index} setIndex={setIndex} setAboutvisibility={setAboutvisibility} />

		</div >
	)
}

export default navbar