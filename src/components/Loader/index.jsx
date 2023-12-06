import React, { Suspense } from 'react';
 const Loader = ({ children }) => {
	return <Suspense fallback={<div>...loading</div>}>{children}</Suspense>;
};

export default Loader
