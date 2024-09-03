import { Box, Image } from '@chakra-ui/react';
import React from 'react';

export default function Rezumen() {
	return (
		<Box w={'full'} display={'flex'} alignItems={'center'} justifyContent={'center'} py={'80px'} bg={'black'}>
			<Image
				w={{ base: 'full', xl: '30%' }}
				h={{ base: '60%', xl: 'full' }}
				src='https://i.postimg.cc/4dH9Hkw6/web-developer.png'
				alt='rezumen img'
				objectFit={'cover'}
			/>
		</Box>
	);
}
