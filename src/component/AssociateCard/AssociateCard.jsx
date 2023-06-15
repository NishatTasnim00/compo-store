import React from 'react';
import img from '../../assets/Rectangle 171.png'
import logo from '../../assets/png-transparent-spain-sea-salt-20-minutos-brand-verified-stamp-angle-text-logo-removebg-preview 2.png';
const AssociateCard = () => {
	return (
			<div className="card card-compact w-[304px] h-[241px] shadow-xl shadow-gray-400 rounded-3xl  bg-[#2C2C2C]">
				<figure>
					<img className="h-[175px] w-full border-t-6" src={img} alt="Shoes" />
				</figure>
				<div className='flex justify-between py-3'>
					<div className=" text-white border-b-3xl pl-5">
						<h2 className="text-xl">Name Title</h2>
						<p className="text-base">Name Title Location : </p>
					</div>
					<div className=''
                    >
                        <img src={logo} alt="" />
                    </div>
				</div>
			</div>
	);

};

export default AssociateCard;
