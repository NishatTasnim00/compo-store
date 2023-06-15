import React from 'react';
import img from '../../assets/blog/FliqaIndia wedding.png'
const BlogCard = () => {
    return (
			<div className="w-[584px] h-[307px] shadow-xl image-full relative bg-black rounded-xl">
				<figure>
					<img src={img} alt="Shoes" />
				</figure>
				<div className="absolute w-[427px] h-full rounded-xl top-0 bg-black bg-opacity-40 card-body opacity-0 hover:opacity-100 text-white">
					<p className="font-normal text-2xl">
						Feature on:Sep 15, 2021
					</p>
					<h2 className="text-5xl">Wedding Photography at Goa</h2>


				</div>
			</div>
		);
};

export default BlogCard;