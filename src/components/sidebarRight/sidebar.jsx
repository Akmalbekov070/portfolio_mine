import { Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { BiLogoGithub } from 'react-icons/bi';
import { BsInstagram } from 'react-icons/bs';

export default function Sidebar() {
	return (
		<Box position={'fixed'} top={'260px'} right={'10'}>
			<Flex flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={2}>
				<Link href={'https://github.com/Akmalbekov070'}>
					<BiLogoGithub size={'40'} color='#09f7d3' />
				</Link>
				<Box w={'1.5px'} h={16} bg={'#09f7d3'}></Box>
				<Link href={'https://instagram.com/akhmedov_313__?igshid=MWRxaGNlOWV3cm9iZg%3D%3D&utm_source=qr'}>
					<BsInstagram size={'32'} color='#09f7d3' />
				</Link>
			</Flex>
		</Box>
	);
}
