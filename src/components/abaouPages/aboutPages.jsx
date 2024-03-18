import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export default function AboutPages() {
	return (
		<Box
			w={'full'}
			h={{ base: '140vh', sm: '100vh' }}
			bg={'black'}
			pt={{ base: '40px', lg: '50px' }}
			display={'flex'}
			flexDirection={'column'}
			justifyContent={'center'}
			alignItems={'center'}
		>
			<Heading color={'#09f7d3'} fontSize={'5xl'} fontFamily={'initial'} position={'relative'} left={0} py={5}>
				About me
			</Heading>
			<Box w={{ base: 'full', lg: '800px' }} h={{ base: '550px', sm: '480px', lg: '350px' }} border={'1px'} py={6} px={6}>
				<Text color={'white'} fontSize={'lg'}>
					Hello, my name is Akmal, I am 16 years old and I am a frontend developer. I have been working in this field for more
					than 1.5 years
				</Text>
				<Text color={'gray.400'} fontSize={'lg'}>
					I enrolled in a frontend course in 2021 due to my interest in WEB PROGRAMMING and completed the frontend course in 1
					year. During this time, I prepared many sites and a portfolio for myself, and since I have not yet become such a perfect
					developer, I am still online for other courses. I participated Don't think why this year is the same mistake. During
					this year, I spend 3-4 months for my programs and practice, and because of this time, I became a skilled web developer
					2015 - 2017 during this year I got interested in backend because of my interest in full stack developers and manso in
					less than 1 year I learned backend how to connect frontend and backend working with databases and many things I learned
					many new libraries and programs
				</Text>
			</Box>
		</Box>
	);
}
