import { Box, Grid, HStack, Image, GridItem, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export default function Portfolio({ port, bg }) {
	console.log(port);
	return (
		<Box>
			<Heading color={'#09f7d3'} fontSize={'5xl'} px={0} py={10}>
				Portfolio
			</Heading>
			<Text color={'gray.500'} fontSize={'2xl'} fontWeight={'300'} fontFamily={'italic'} py={3} pl={6}>
				{bg.image}
			</Text>
			<Grid w={'full'} display={'flex'} flexWrap={{ base: 'wrap', lg: 'nowrap' }} justifyContent={'space-between'} gap={6} px={6}>
				{port.map(el => (
					<Box w={'full'} key={el.node.id}>
						<Link href={`/port/${el.node.text}`}>
							<HStack position={'relative'} overflow={'hidden'} className='port' transition={' 1s all'}>
								<Image w={'800px'} h={'300px'} objectFit={'cover'} src={el.node.img.url} alt='akmal' />
								<Box
									className='soya'
									w={'full'}
									h={'full'}
									overflow={'hidden'}
									position={'absolute'}
									bg={'blackAlpha.700'}
									top={'-300px'}
									left={0}
								>
									<Heading
										w={'full'}
										textAlign={'center'}
										position={'absolute'}
										bottom={'120px'}
										fontSize={'2xl'}
										fontFamily={'sans-serif'}
										fontStyle={'italic'}
										color={'#fff'}
									>
										{el.node.text}
									</Heading>
								</Box>
							</HStack>
						</Link>
					</Box>
				))}
			</Grid>
			<Text color={'gray.500'} fontSize={'2xl'} fontWeight={'300'} fontFamily={'italic'} py={3} pl={6}>
				{bg.imageClose}
			</Text>
		</Box>
	);
}
