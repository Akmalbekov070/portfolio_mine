import { Box, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
	return (
		<Box
			w={'full'}
			h={20}
			display={'flex'}
			alignItems={'center'}
			justifyContent={'space-between'}
			bg={'blackAlpha.700'}
			zIndex={50}
			px={12}
		>
			<Box w={'full'} display={'flex'} alignItems={'center'} gap={1}>
				<Link href={'/'}>
					<Image
						w={'70px'}
						h={'60px'}
						src='https://logos.textgiraffe.com/logos/logo-name/36087360-designstyle-sharks-m.png'
						alt='Icon Image'
					/>
				</Link>
				<Text fontSize={'xl'} fontFamily={'cursive'} fontStyle={'oblique'}>
					Akhmedov.coder
				</Text>
			</Box>
			<Box>s</Box>
		</Box>
	);
};

export default Footer;
