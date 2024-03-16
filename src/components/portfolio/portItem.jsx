import { getPorfolio } from '@/server';
import { Box, Button, HStack, Heading, Image, Link, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

export default function PortfolioItems({ param }) {
	const [scillDetail, setScillDetail] = useState([]);
	useEffect(() => {
		getPorfolio().then(res => setScillDetail(res));
	}, []);
	const scillItem = scillDetail.filter(item => item.node.text === param.name);
	console.log(scillItem);
	return (
		<Box w={'full'} h={'100vh'} bg={'black'} pt={32} px={{ base: 4, lg: 10 }}>
			{scillItem.map(item => (
				<Box key={item.node.id} color={'white'}>
					<HStack
						position={'relative'}
						overflow={'hidden'}
						display={{ base: 'block', lg: 'flex' }}
						className='port'
						transition={' 1s all'}
						gap={10}
					>
						<Image
							w={{ base: 'full', lg: '50%' }}
							h={{ base: '300px', lg: '500px' }}
							objectFit={'cover'}
							src={item.node.img.url}
							alt='akmal'
						/>
						<Box
							className='soya'
							w={{ base: 'full', lg: '50%' }}
							h={{ base: '300px', lg: '500px' }}
							overflow={'hidden'}
							position={'absolute'}
							bg={'blackAlpha.700'}
							top={{ base: '-300px', lg: '-500px' }}
							left={0}
						>
							<Heading
								w={'full'}
								textAlign={'center'}
								position={'absolute'}
								bottom={{ base: '130px', xl: '220px' }}
								fontSize={'2xl'}
								fontFamily={'sans-serif'}
								fontStyle={'italic'}
								color={'#fff'}
							>
								{item.node.text}
							</Heading>
						</Box>
						<Box py={6} w={{ base: 'full', lg: '40%' }}>
							<Text>{item.node.decs}</Text>
						</Box>
					</HStack>
					<Box textAlign={'center'} pt={3}>
						<Link href={''}>
							<Button
								bg={'transparent'}
								colorScheme={'blue'}
								px={10}
								py={6}
								border={'2px'}
								borderColor={'blue'}
								fontSize={'25px'}
							>
								View the site
							</Button>
						</Link>
					</Box>
				</Box>
			))}
		</Box>
	);
}
