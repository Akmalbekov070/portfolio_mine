import { Box, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import MenuPage from '../menu/menu';

export default function About({ about, bg }) {
	return (
		<Box>
			<MenuPage />
			<div data-aos='fade-up' data-aos-anchor-placement='top-center'>
				<Box w={'full'} px={'50px'} pt={'50px'} alignItems={'center'} justifyContent={'space-between'}>
					<Heading color={'#09f7d3'} fontSize={'5xl'} fontFamily={'initial'} position={'relative'} left={'-130px'} py={3}>
						<div data-aos='fade-up' data-aos-anchor-placement='top-center'>
							About me
						</div>
					</Heading>
					{/* text code 1 */}
					<Text color={'gray.500'} fontSize={'2xl'} fontWeight={'300'} fontFamily={'italic'} pt={6}>
						{bg.box}
					</Text>
					<Text color={'gray.500'} fontSize={'2xl'} fontWeight={'300'} fontFamily={'italic'} pt={6} pl={8}>
						{bg.card}
					</Text>
					<Box w={'full'} py={10}>
						{about.map(item => (
							<Box
								key={item.node.id}
								w={'full'}
								display={'flex'}
								alignItems={'center'}
								gap={'14'}
								border='2px'
								borderColor='gray.900'
								boxShadow={'2xl'}
								px={5}
								py={5}
								bg={'#111'}
								borderRadius={10}
							>
								<Box>
									<Image
										w={'400px'}
										h={'440px'}
										boxShadow={'dark-lg'}
										bg={'white'}
										objectFit={'cover'}
										borderRadius={16}
										src={item.node.img.url}
										alt='akmal'
										border={'double'}
										position={'absolute'}
									/>
									<Box w={'400px'} h={'440px'} bg={'blackAlpha.500'} position={'relative'} top={'0'} left={0} zIndex={20}></Box>
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
									<Box>
										<Box></Box>
										<Box></Box>
									</Box>
								</Box>
							</Box>
						))}
						{/* text code */}
						<Text color={'gray.500'} fontSize={'2xl'} fontWeight={'300'} fontFamily={'italic'} pt={10} pl={8}>
							{bg.cardClose}
						</Text>
						<Text color={'gray.500'} fontSize={'2xl'} fontWeight={'300'} fontFamily={'italic'} pt={7}>
							{bg.boxClose}
						</Text>
					</Box>
				</Box>
			</div>
		</Box>
	);
}
