// import React, { useEffect, useState } from 'react';

// export default function Navbar() {
// 	const [nav, setNav] = useState([]);
// 	const movies = nav[Math.floor(Math.random() * nav.length)];
// 	useEffect(() => {
// 		fetch('http://localhost:3500/Hero')
// 			.then(res => res.json())
// 			.then(el => setNav(el));
// 	}, []);
// 	console.log(movies);
// 	return <div>Navbar</div>;
// }
