import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export default function Scills({ scill, bg }) {
	console.log(bg);
	return (
		<div data-aos='fade-up' data-aos-anchor-placement='top-center'>
			<Box w={'full'}>
				<Heading color={'#09f7d3'} fontSize={'5xl'} fontFamily={'initial'} position={'relative'} left={'-30px'} py={6}>
					Scills
				</Heading>
				<Text color={'gray.500'} fontSize={'2xl'} fontWeight={'300'} fontFamily={'italic'} py={3}>
					{bg.card}
				</Text>
				<Text color={'gray.500'} fontSize={'2xl'} fontWeight={'300'} fontFamily={'italic'} py={3} pl={7}>
					{bg.cardItem}
				</Text>
				<Flex
					w={'full'}
					gap={2}
					flexWrap={{ base: 'wrap', xl: 'nowrap' }}
					alignItems={'center'}
					justifyContent={'center'}
					cursor={'pointer'}
					py={4}
				>
					{scill.map(item => (
						<div key={item.node.id} data-aos='fade-up' data-aos-anchor-placement='bottom-bottom'>
							<Link href={`scill/${item.node.text}`}>
								<Box w={'120px'} h={'170px'} borderRadius={10} boxShadow={'lg'} bg={'#09f7d3'}>
									<Box
										w={'full'}
										h={'170px'}
										display={'flex'}
										justifyContent={'center'}
										alignItems={'center'}
										flexDirection={'column'}
									>
										<Image w={'full'} h={'55%'} src={item.node.img.url} alt={item.node.text} title='decription' />
										<Heading py={1} fontSize={'lg'} fontStyle={'italic'} fontWeight={'medium'} fontFamily={'sans-serif'}>
											{item.node.text}
										</Heading>
									</Box>
								</Box>
							</Link>
						</div>
					))}
				</Flex>
				<Text color={'gray.500'} fontSize={'2xl'} fontWeight={'300'} fontFamily={'italic'} py={3} pl={7}>
					{bg.cardItemClose}
				</Text>
				<Text color={'gray.500'} fontSize={'2xl'} fontWeight={'300'} fontFamily={'italic'} py={3}>
					{bg.cardClose}
				</Text>
			</Box>
		</div>
	);
}
