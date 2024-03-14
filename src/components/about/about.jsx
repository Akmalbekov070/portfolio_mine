import { Box, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import MenuPage from '../menu/menu';

export default function About({ about, bg }) {
	return (
		<Box>
			<MenuPage />
			<div data-aos='fade-up' data-aos-anchor-placement='top-center'>
				<Box x w={'full'} px={'50px'} pt={'50px'} alignItems={'center'} justifyContent={'space-between'}>
					<Heading
						color={'#09f7d3'}
						fontSize={'5xl'}
						fontFamily={'initial'}
						position={'relative'}
						left={{ base: '-30', xl: '-130px' }}
						py={3}
					>
						<div data-aos='fade-up' data-aos-anchor-placement='top-center'>
							About me
						</div>
					</Heading>
					{/* text code 1 */}
					<Text color={'gray.500'} fontSize={'2xl'} fontWeight={'300'} fontFamily={'italic'} pt={{ base: 3, lg: 6 }}>
						{bg.box}
					</Text>
					<Text color={'gray.500'} fontSize={'2xl'} fontWeight={'300'} fontFamily={'italic'} pt={{ base: 3, lg: 6 }} pl={8}>
						{bg.card}
					</Text>
				</Box>
				<Box py={{ base: 3, lg: 10 }}>
					{about.map(item => (
						<Box
							key={item.node.id}
							w={'full'}
							h={{ sm: '100vh', lg: '500px' }}
							display={{ lg: 'flex' }}
							alignItems={{ lg: 'center' }}
							gap={'14'}
							border='2px'
							borderColor='gray.900'
							boxShadow={'2xl'}
							px={5}
							py={5}
							borderRadius={10}
						>
							<Box w={'full'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
								<Image
									w={{ base: '250px', sm: '400px', lg: '400px' }}
									h={{ base: '400px', sm: '440px', lg: '440px' }}
									objectFit={{ lg: 'cover' }}
									borderRadius={16}
									src={item.node.img.url}
									alt='akmal'
									position={'absolute'}
								/>
								<Box
									w={{ base: '250px', lg: '400px' }}
									h={'440px'}
									bg={'blackAlpha.500'}
									position={'relative'}
									top={'0'}
									left={0}
									zIndex={20}
								></Box>
							</Box>
							<Box w={'full'} fontWeight={100} fontStyle={'italic'} lineHeight={8}>
								<Text fontSize={'2xl'} color={'white'} py={3}>
									{item.node.text}
								</Text>
								<Text w={'full'} color={'gray.500'} py={3}>
									{item.node.desc}
								</Text>
								<Text fontSize={'2xl'} color={'white'} py={3}>
									MERN stack & Web Developer.
								</Text>
							</Box>
						</Box>
					))}
					{/* text code */}
					<Text color={'gray.500'} fontSize={'2xl'} fontWeight={'300'} fontFamily={'italic'} pt={{ base: 3, lg: 6 }} pl={16}>
						{bg.cardClose}
					</Text>
					<Text color={'gray.500'} fontSize={'2xl'} fontWeight={'300'} fontFamily={'italic'} pt={{ base: 3, lg: 7 }} pl={10}>
						{bg.boxClose}
					</Text>
				</Box>
			</div>
		</Box>
	);
}
