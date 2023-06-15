import React from 'react';
import AssociateCard from './component/AssociateCard/AssociateCard';
import FeaturedCard from './component/FeaturedCard/FeaturedCard';
import BlogCard from './component/BlogCard/BlogCard';

const App = () => {
  return (
		<div className='grid grid-cols-3 p-10'>
			<AssociateCard></AssociateCard>

			<FeaturedCard></FeaturedCard>
			<BlogCard></BlogCard>
		</div>
	);
};

export default App;