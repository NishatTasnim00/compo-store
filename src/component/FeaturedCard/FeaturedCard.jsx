import React from 'react';
import img from '../../assets/feature/image 64.png';

const FeaturedCard = () => {
	return (
			<div className="w-72 rounded-xl border-2 shadow-lg">
				<figure className="h-80 w-full rounded-lg shadow-[0px_4px_4px_0px_rgba(0, 0, 0, 0.25)] rounded-t-xl">
					<img
						className="h-80 w-full rounded-t-xl object-cover"
						src={img}
						alt="Shoes"
					/>
				</figure>
				<div className="text-center">
					<h2 className="font-semibold text-xl pb-2">Pre Wedding Photoshoot</h2>
					{/* <div className="divider px-5 py-0"></div> */}
					<hr className="mx-4 py- border-black " />
					<p className="text-[#4C696D] text-lg">
						<span className="font-semibold">starting at </span>
						25,000(one day)
					</p>
					<div className="bg-[#4E99A4] w-8/12 mx-auto rounded-3xl my-3">
						<button className="text-white">know more</button>
					</div>
				</div>
			</div>
	);
};

export default FeaturedCard;
