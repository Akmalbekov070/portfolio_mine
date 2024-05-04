import { getPorfolio } from '@/server';
import { Box, Button, HStack, Heading, Image, Link, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

export default function PortfolioItems({ param }) {
	const [scillDetail, setScillDetail] = useState([]);
	useEffect(() => {
		getPorfolio().then(res => setScillDetail(res));
	}, []);
	const scillItem = scillDetail.filter(item => item.node.text === param.name);
	return (
		<Box w={'full'} h={{ base: '100vh', lg: '110vh' }} bg={'black'} pt={32} px={{ base: 4, lg: 10 }}>
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
							<Text fontSize={{ base: '', xl: 'xl' }}>{item.node.decs}</Text>
						</Box>
					</HStack>
					<Box textAlign={'center'} pt={8}>
						<Link href={`${item.node.nowDesc}`}>
							<Button
								bg={'transparent'}
								colorScheme={'blue'}
								px={10}
								py={{ base: 6, lg: 8 }}
								border={'2px'}
								borderColor={'blue'}
								fontSize={'25px'}
								color={'white'}
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
