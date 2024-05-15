import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

export default function NewsPage() {
	return (
		<>
			<Box
				w={'full'}
				h={''}
				bg={'black'}
				pt={'100px'}
				display={'flex'}
				justifyContent={'center'}
				flexDirection={'column'}
				alignItems={'center'}
				px={{ base: 2 }}
			>
				<Box>
					<Text py={4} color={'white'} fontSize={'2xl'}>
						The news informs that IT Course is opening new courses
					</Text>
					<Image src='https://i.postimg.cc/7Yf2HSnt/photo-2024-04-05-00-58-35.jpg' alt='news image' objectFit={'cover'} />
				</Box>
				<Box py={10}>
					<Image src='https://i.postimg.cc/MpNgcvhx/photo-2024-04-23-23-22-29.jpg' alt='new image' objectFit={'cover'} />
				</Box>
			</Box>
		</>
	);
}
