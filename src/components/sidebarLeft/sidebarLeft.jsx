import { Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

import { BsFacebook } from 'react-icons/bs';
import { FaTelegram } from 'react-icons/fa';

export default function SidebarLeft() {
	return (
		<Box position={'fixed'} top={'260px'} left={'10'}>
			<Flex flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={2}>
				<Link href={'/404'}>
					<BsFacebook size={'32'} color='#09f7d3' />
				</Link>
				<Box w={'1.5px'} h={16} bg={'#09f7d3'}></Box>
				<Link href={'https://t.me/akmalbekov'}>
					<FaTelegram size={'32'} color='#09f7d3' />
				</Link>
			</Flex>
		</Box>
	);
}
