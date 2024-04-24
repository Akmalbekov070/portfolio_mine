import { getAbaoutPage } from '@/server';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Contact } from '..';

export default function AboutPages() {
	const [scillDetail, setScillDetail] = useState([]);
	useEffect(() => {
		getAbaoutPage().then(res => setScillDetail(res));
	}, []);
	console.log(scillDetail);
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 1,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	return (
		<>
			<Box w={'full'} bg={'black'} pt={{ base: '50px', lg: '50px' }} px={10}>
				<Heading
					color={'#09f7d3'}
					fontSize={'5xl'}
					fontFamily={'initial'}
					position={'relative'}
					pl={{ base: '-45px', xl: '10px' }}
					pt={10}
					py={5}
				>
					About Me
				</Heading>
				<Box
					w={'full'}
					display={{ base: 'block', xl: 'flex' }}
					justifyContent={{ base: 'center', xl: 'space-between' }}
					alignItems={'center'}
					px={{ base: 2, xl: 24 }}
					py={{ base: 5, xl: 0 }}
					border={'1px'}
					gap={10}
				>
					<Box w={{ base: 'full', xl: '35%' }}>
						<Carousel responsive={responsive}>
							{scillDetail.map(item => (
								<Box w={'full'} key={item.node.id} py={6}>
									<Image
										w={'full'}
										h={{ base: '300px', sm: '60vh', lg: '80vh', xl: '500px' }}
										objectFit={'cover'}
										src={item.node.img.url}
										alt='img'
									/>
								</Box>
							))}
						</Carousel>
					</Box>
					<Box w={{ basae: 'full', xl: '60%' }} pl={{ base: '0px', xl: 10 }}>
						<Text fontFamily={'sans-serif'} fontSize={'lg'} pt={{ base: 5, xl: 0 }} color={'white'}>
							Hello, my name is Akmal, I am 17 years old and I am a frontend developer. I have been working in this field for more
							than 2 years my hobby is play football
						</Text>
						<Text fontFamily={'sans-serif'} fontSize={'lg'} color={'gray.400'} pt={2}>
							I enrolled in a frontend course in 2021 due to my interest in WEB PROGRAMMING and completed the frontend course in 1
							year. During this time, I prepared many sites and a portfolio for myself, and since I have not yet become such a
							perfect developer, I am still online for other courses. I participated Dont think why this year is the same mistake.
							During this year, I spend 3-4 months for my programs and practice, and because of this time, I became a skilled web
							developer 2015 2017 during this year I got interested in backend because of my interest in full stack developers and
							manso in less than 1 year I learned backend how to connect frontend and backend working with databases and many
							things I learned many new libraries and programs
						</Text>
					</Box>
				</Box>
				{/* rezumen img */}
				<Box w={'full'} display={{ base: 'blok', xl: 'flex' }} justifyContent={'space-between'} alignItems={'center'}>
					<Box>
						<Heading
							color={'#09f7d3'}
							fontSize={'5xl'}
							fontFamily={'initial'}
							position={'relative'}
							pl={{ base: '-45px', xl: '10px' }}
							pt={10}
							py={5}
						>
							My Rezumen
						</Heading>
						<Box w={'full'} display={'flex'} py={5}>
							<Image
								w={{ base: 'full', xl: '80%' }}
								h={'full'}
								src='https://i.postimg.cc/4dH9Hkw6/web-developer.png'
								alt='rezumen img'
								objectFit={'cover'}
							/>
						</Box>
					</Box>
					<Box>
						<Heading
							color={'#09f7d3'}
							fontSize={'5xl'}
							fontFamily={'initial'}
							position={'relative'}
							pl={{ base: '-45px', xl: '10px' }}
							pt={10}
							py={5}
						>
							My Certificate
						</Heading>
						<Box w={'full'} py={5}>
							<Image
								w={{ base: 'full', xl: '80%' }}
								h={'full'}
								src='https://i.postimg.cc/ncgNqvHq/photo-2024-04-24-23-14-25.jpg'
								alt='certification img'
								objectFit={'cover'}
							/>
						</Box>
					</Box>
				</Box>
				{/* Sertification img */}
				{/* <Box>
					<Image src='' alt='Sertification img' />
				</Box> */}
			</Box>
		</>
	);
}
