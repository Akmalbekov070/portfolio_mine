import { Box } from '@chakra-ui/react';
import React from 'react';
import { About, AboutPages, Header, Portfolio, Scills } from '@/components';
import Sidebar from '../sidebarRight/sidebar';
import SidebarLeft from '../sidebarLeft/sidebarLeft';

export default function Main({ hero, port, about, scill }) {
	const bg = {
		html: '<html>',
		body: '<body>',
		head: '<h1>',
		head2: '<h2>',
		parag: '<p>',
		btn: '<button>',
		btnClose: '</button> ',
		htmlClose: '</html>',
		bodyClose: '</body>',
		headClose: '</h1>',
		head2Close: '</h2>',
		paragClose: '</p>',
		card: '<Card>',
		cardClose: '</ Card>',
		image: '< Image > ',
		imageClose: '</ Image>',
		box: '<Box>',
		boxClose: '</ Box>',
		cardItem: '<CardItem>',
		cardItemClose: '</ CardItem>',
	};
	return (
		<Box w={'full'} bg={'black'}>
			{hero.map(item => (
				<Box key={item.node.id}>
					<Header {...bg} item={item.node} />
				</Box>
			))}
			<Box w={'full'} px={{ sm: '30px', lg: '120px', xl: '170px' }}>
				<About about={about} bg={bg} />
				<Box position={'relative'} left={'-50px'}>
					<Scills scill={scill} bg={bg} />
				</Box>
			</Box>
			<Portfolio port={port} bg={bg} />
			{/* <Education /> */}
			<Box zIndex={10}>
				<Sidebar />
				<SidebarLeft />
			</Box>
		</Box>
	);
}
