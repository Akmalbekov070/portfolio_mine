import { Box, HStack, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { TbCircleLetterC } from 'react-icons/tb';

const Footer = () => {
	return (
		<Box
			w={'full'}
			h={20}
			display={'flex'}
			alignItems={'center'}
			justifyContent={'space-between'}
			bg={'blackAlpha.800'}
			zIndex={50}
			px={{ base: 2, xl: 12 }}
		>
			<Box w={'full'} display={'flex'} alignItems={'center'} gap={1}>
				<Link href={'/'}>
					<Image
						w={{ base: '50px', xl: '70px' }}
						h={'60px'}
						src='https://logos.textgiraffe.com/logos/logo-name/36087360-designstyle-sharks-m.png'
						alt='Icon Image'
					/>
				</Link>
				<Text fontSize={{ base: 'sm', xl: 'xl' }} fontFamily={'cursive'} fontStyle={'oblique'} color={'white'}>
					Akhmedov.coder
				</Text>
			</Box>
			<HStack w={'full'} alignItems={'center'} justifyContent={'end'} color={'white'}>
				<TbCircleLetterC />
				<Text fontSize={{ base: '10px', xl: '15px' }} w={{ base: 'full', xl: '400px' }}>
					Akhmedov.coder 2023 Barcha huquqlari himoyalangan.
				</Text>
			</HStack>
		</Box>
	);
};

export default Footer;
