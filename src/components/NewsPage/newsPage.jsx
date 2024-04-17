import { Box, Image } from '@chakra-ui/react';
import React from 'react';

export default function NewsPage() {
	return (
		<Box w={'full'} h={'100vh'} bg={'black'} pt={'100px'} display={'flex'} justifyContent={'center'} px={{ base: 2 }}>
			<Box w={'full'} h={'full'}>
				<Image src='https://i.postimg.cc/7Yf2HSnt/photo-2024-04-05-00-58-35.jpg' alt='news image' objectFit={'cover'} />
			</Box>
		</Box>
	);
}
