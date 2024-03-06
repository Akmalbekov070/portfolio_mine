// import { Box, Flex, HStack, Heading, IconButton, Image, useColorMode } from '@chakra-ui/react';
// import React, { useEffect, useState } from 'react';
// import { BsFillSunFill } from 'react-icons/bs';
// import { BsMoonStarsFill } from 'react-icons/bs';

// export default function Hero() {
// 	const { colorMode, toggleColorMode } = useColorMode();
// 	const [navbar, setNavbar] = useState([]);
// 	useEffect(() => {
// 		fetch('http://localhost:3500/navbar')
// 			.then(res => res.json())
// 			.then(data => setNavbar(data));
// 	}, []);
// 	const movies = navbar[Math.floor(Math.random() * navbar.length)];

// 	return (
// 		<Box w={'full'} h={'100px'} bg={movies?.img}>
// 			<Box w={'full'} h={20} py={8} px={8}>
// 				<Flex w={'full'} justifyContent={'space-between'} alignItems={'center'}>
// 					<HStack gap={8}>
// 						{navbar.map(el => (
// 							<a href=''>{el.title}</a>
// 						))}
// 					</HStack>
// 					<Flex>
// 						<Heading>Make a Visit Country</Heading>
// 					</Flex>
// 					<HStack gap={8}>
// 						{navbar.map(el => (
// 							<a href=''>{el.title2}</a>
// 						))}
// 						<IconButton
// 							aria-label='color-mode'
// 							onClick={toggleColorMode}
// 							icon={colorMode === 'light' ? <BsMoonStarsFill /> : <BsFillSunFill />}
// 							bg={'transparent'}
// 							variant={'solid'}
// 							color={'white'}
// 						/>
// 					</HStack>
// 				</Flex>
// 			</Box>
// 		</Box>
// 	);
// }
