import "./App.css";
// IMAGES IMPORTED
import {
	logo,
	convo,
	users,
	phone,
	message,
	email,
	grow,
	community,
	mockup,
	curve,
	topcard1,
	btmcard1,
	topcard2,
	btmcard2,
	btmcard1mobile,
	topcard1mobile,
	topcard2mobile,
	bmtcard2mobile,
} from "./images";
// FONT AWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookSquare,
	faInstagram,
	faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import CustomLogo from "./CustomLogo";
function App() {
	return (
		<div className="App">
			<header className="flex items-center justify-between w-[100%] mt-6 px-6 lg:px-12 lg:pt-8">
				<img src={logo} alt="logo" className="w-[35%] h-[35%] lg:w-[15%]" />
				<button className="border-2 border-pink text-pink bg-white p-2 w-[30%] rounded-full shadow-lg hover:opacity-60 lg:w-[10%] ">
					Try it Free
				</button>
			</header>
			<main className="w-[100%] mx-auto">
				{/* HERO TITLE */}
				<h1 className="text-cyan font-bold text-3xl leading-10 mt-20 w-[80%] mx-auto lg:w-[100%] lg:tracking-wide lg:text-4xl lg:mt-32">
					{" "}
					Build The Community Your Fans Will Love
				</h1>
				{/* HERO DESCRIPTION */}
				<p className="text-cyan font-medium leading-7 tracking-wide w-[70%] mx-auto mt-10 lg:w-[34%]">
					{" "}
					Huddle re-imagines the way we build communities. You have a voice, but
					so does your audience. Create connections with your users as you
					engage in genuine discussion.{" "}
				</p>
				{/* HERO CTA */}
				<button className="bg-pink text-white p-3 rounded-full shadow-lg font-semibold w-[60%] mt-12 hover:opacity-60 lg:w-[25%] lg:mt-8">
					{" "}
					Get Started For Free
				</button>
				{/* MOCKUP */}
				<img
					src={mockup}
					alt="mockups"
					className="mt-40 w-[90%] mx-auto lg:w-[70%] lg:mt-20"
				/>
				{/* BENEFITS SECTION */}
				<section className="w-[80%] mx-auto flex flex-col items-center lg:flex-row lg:my-40 lg:justify-center">
					{/* STATS SECTION */}
					{/* COMMUNITY CARD */}
					<div className="flex flex-col text-left mt-32 lg:align-middle lg:items-center w-[50%] lg:mt-0">
						<img
							src={community}
							alt="community"
							className="w-[18%] lg:w-[8%] lg:float-left"
						/>
						<h1 className="text-cyan text-[4rem] tracking-wide">1.4K+</h1>
						<p className="text-cyan opacity-60 text-left tracking-wide">
							{" "}
							Communities Formed
						</p>
					</div>
					{/* MESSAGES CARD */}
					<div className="flex flex-col text-left mt-20 w-[50%] lg:items-center lg:align-middle lg:mt-0">
						<img src={message} alt="community" className="w-[14%] lg:w-[7%]" />
						<h1 className="text-cyan text-[4rem]">2.7m+</h1>
						<p className="text-cyan opacity-60 text-center tracking-wide lg:text-left">
							{" "}
							Messages Sent
						</p>
					</div>
				</section>
				{/* CARD #1 */}
				{/* TOGETHER CARD */}
				<img
					src={topcard1}
					alt="card top"
					className="lg:w-[100%] hidden lg:block"
				/>
				<img
					src={topcard1mobile}
					alt="mobile card top"
					className="w-[100%] lg:hidden"
				/>
				<div className=" bg-[#f6fbff] lg:mt-0 lg:flex lg:flex-row-reverse lg:items-center lg:pl-20">
					<img
						src={grow}
						alt="grow together illustration"
						className="w-[80%] mx-auto lg:w-[45%] lg:pr-20"
					/>
					<div className="">
						<h2 className="text-2xl text-cyan mt-12 lg:text-left lg:text-4xl">
							Grow Together
						</h2>
						<p className="text-cyan mt-4 text-center leading-7 w-[68%] mx-auto lg:mx-0 lg:text-left lg:w-[60%] lg:mt-6 pb-10 lg:pb-0">
							{" "}
							Generate meaningful discussions with your audience and build a
							strong, loyal community. Think of the insightful conversations you
							miss out on with a feedback form.
						</p>
					</div>
				</div>
				<img
					src={btmcard1}
					alt="card bottom "
					className="lg:w-[100%] hidden lg:block"
				/>
				<img
					src={btmcard1mobile}
					alt="mobile card bottom"
					className="w-[100%] lg:hidden"
				/>
				{/* CARD #2 */}
				{/* CONVERSATIONS CARD */}
				<div className="my-40 lg:my-40 lg:flex lg:flex-row lg:items-center">
					<img
						src={convo}
						alt="flowing conversations illustration"
						className="w-[80%] mx-auto  lg:w-[45%] lg:pl-20"
					/>
					<div className="lg:flex lg:flex-col lg:justify-center lg:items-center lg:mx-auto lg:text-left lg:w-[50%]">
						<h2 className="text-2xl text-cyan mt-12  lg:text-left lg:text-4xl lg:w-[65%]">
							Flowing Conversations
						</h2>
						<p className="text-cyan mt-4 text-center leading-7 w-[70%] mx-auto lg:mx-0 lg:text-left lg:w-[65%] lg:mt-6">
							{" "}
							You wouldn't paginate a conversation in real life, so why do it
							online? Our threads have just-in-time loading for a more natural
							flow.
						</p>
					</div>
				</div>
				{/* CARD #3 */}
				{/* USERS CARD */}
				<img
					src={topcard2}
					alt="card top"
					className="lg:w-[100%] hidden lg:block"
				/>
				<img
					src={topcard2mobile}
					alt="mobile card top"
					className="w-[100%] lg:hidden"
				/>
				<div className=" bg-[#f6fbff] lg:mt-0 lg:flex lg:flex-row-reverse lg:items-center lg:pl-20  ">
					<img
						src={users}
						alt="your users illustration"
						className="w-[80%] mx-auto lg:w-[45%] lg:pr-20"
					/>
					<div>
						<h2 className="text-2xl text-cyan mt-12 lg:text-left lg:text-4xl">
							Your Users
						</h2>
						<p className="text-cyan mt-4 text-center leading-7 w-[70%] mx-auto lg:mx-0 lg:text-left lg:w-[63%] lg:mt-6 pb-10 lg:pb-0">
							{" "}
							It takes no time at all to integrate Huddle with your app's
							authentication solution. This means, once signed in to your app,
							your users can start chatting immediately.
						</p>
					</div>
				</div>
				<img
					src={btmcard2}
					alt="desktop card bottom"
					className="lg:w-[100%] hidden lg:block"
				/>
				<img
					src={bmtcard2mobile}
					alt="mobile card bottom"
					className="w-[100%] lg:hidden"
				/>
				{/* COMMUNITY CARD */}
				<div className="mt-64 lg:mb-32">
					<h1 className=" text-3xl lg:text-4xl">
						Ready To Build Your Community?
					</h1>
					<button className="bg-pink text-white p-3 rounded-full shadow-lg font-semibold w-[60%] mt-12 hover:opacity-60 lg:w-[20%] lg:p-4">
						{" "}
						Get Started For Free
					</button>
				</div>
			</main>
			{/* FOOTER */}
			<img src={curve} alt="test" className="w-[100%] mt-24" />
			<footer className="bg-cyan pt-12 pb-8 lg:pb-16">
				<div className="lg:flex lg:flex-row-reverse lg:mt-0 lg:items-center lg:align-middle lg:justify-center">
					{/* NEWSLETTER SECTION */}
					<div className=" bg-cyan pb-24 lg:mt-0 lg:w-[50%]">
						<div className="w-[90%] mx-auto">
							<h1 className="text-white uppercase font-medium text-2xl text-left tracking-wide">
								Newsletter
							</h1>
							<p className="text-white text-left tracking-wide mt-6 font-medium lg:w-[70%] ">
								{" "}
								To recieve tips on how to grow your community, sign up to our
								weekly newsletter. We’ll never send you spam or pass on your
								email address
							</p>
							{/* FORM */}
							<form className="flex flex-col items-end lg:flex-row ">
								{/* INPUT BOX */}
								<input
									className="w-[100%] mt-8 mx-auto p-3 rounded-lg"
									required
									placeholder="Enter your Email"
								/>
								{/* SUBSCRIBE BTN */}
								<button className=" bg-pink font-semibold text-white w-[30%] p-2 rounded-md mt-3 hover:opacity-60 lg:ml-6 lg:w-[50%] lg:p-3">
									Subscribe
								</button>
							</form>
						</div>
					</div>
					{/* COMPANY DETAILS */}
					<div className="ml-8 lg:w-[50%] lg:ml-16 lg:mt-28">
						{/* FOOTER LOGO */}
						<CustomLogo />
						<p className="text-pale w-[80%] font-semibold  tracking-wide text-left mt-5 lg:w-[50%]">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
							nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
						</p>
						{/* PHONE DETAILS */}
						<div className="flex items-center mt-10">
							<img src={phone} alt="phone icon" className="w-6 h-6" />
							<p className="text-pale ml-4">+1-543-123-4567</p>
						</div>
						{/* EMAIL DETAILS */}
						<div className="flex mt-8 items-center">
							<img src={email} alt="email icon" className="w-6 h-6" />
							<p className="text-pale ml-4"> example@huddle.com</p>
						</div>
						{/* SOCIAL ICONS */}
						<div className="flex gap-4 mt-16">
							{/* FACEBOOK ICON */}
							<FontAwesomeIcon
								icon={faFacebookSquare}
								className="text-white text-2xl hover:cursor-pointer hover:text-blue-400 lg:text-3xl"
							/>
							{/* INSTAGRAM ICON */}
							<FontAwesomeIcon
								icon={faInstagram}
								className="text-white text-2xl hover:cursor-pointer hover:text-blue-400 lg:text-3xl"
							/>
							{/* TWITTER ICON */}
							<FontAwesomeIcon
								icon={faTwitterSquare}
								className="text-white text-2xl hover:cursor-pointer hover:text-blue-400 lg:text-3xl"
							/>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
