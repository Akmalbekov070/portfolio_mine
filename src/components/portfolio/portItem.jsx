import { getPorfolio } from '@/server';
import { Box, HStack, Heading, Image } from '@chakra-ui/react';
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
					<HStack position={'relative'} overflow={'hidden'} className='port' transition={' 1s all'}>
						<Image w={'full'} h={{ base: '300px', lg: '500px' }} objectFit={'cover'} src={item.node.img.url} alt='akmal' />
						<Box
							className='soya'
							w={'full'}
							h={'full'}
							overflow={'hidden'}
							position={'absolute'}
							bg={'blackAlpha.700'}
							top={'-500px'}
							left={0}
						>
							<Heading
								w={'full'}
								textAlign={'center'}
								position={'absolute'}
								bottom={'220px'}
								fontSize={'2xl'}
								fontFamily={'sans-serif'}
								fontStyle={'italic'}
								color={'#fff'}
							>
								{item.node.text}
							</Heading>
						</Box>
					</HStack>
				</Box>
			))}
		</Box>
	);
}
