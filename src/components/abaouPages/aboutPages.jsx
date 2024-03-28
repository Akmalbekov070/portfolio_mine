import { getAbaoutPage } from '@/server';
import { Box, Heading, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

export default function AboutPages() {
	const [scillDetail, setScillDetail] = useState([]);
	useEffect(() => {
		getAbaoutPage().then(res => setScillDetail(res));
	}, []);
	console.log(scillDetail);
	return (
		<>
			<Box w={'full'} bg={'black'} pt={{ base: '50px', lg: '50px' }}>
				<Heading
					color={'#09f7d3'}
					fontSize={'5xl'}
					fontFamily={'initial'}
					position={'relative'}
					pl={{ base: '-45px', xl: '10px' }}
					pt={10}
				>
					About Me
				</Heading>
				<Box
					w={'full'}
					h={{ base: '125vh', sm: '80vh' }}
					display={'flex'}
					justifyContent={'space-between'}
					alignItems={'center'}
					px={24}
					border={'1px'}
				>
					<Box>a</Box>
					<Box>a</Box>
				</Box>
			</Box>
		</>
	);
}
