'use client';
import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { PiCaretDoubleDown } from 'react-icons/pi';
import ParticilBg from '../particiles/particilBg';

export default function Header(props) {
	const { html, body, head, head2, parag, htmlClose, bodyClose, headClose, head2Close, paragClose, btn, btnClose, item } = props;
	return (
		<Box w={'full'} h={'100vh'} position={'relative'} pt={12} zIndex={50}>
			{/* <ParticilBg /> */}
			<Box w={'full'} h={'full'} top={6} left={0} position={'absolute'} zIndex={0}>
				<Image
					w={'full'}
					h={'full'}
					objectFit={'cover'}
					pl={{ base: '0px', sm: '90px', lg: '200px', xl: '300px' }}
					src={item.img.url}
					alt='Akmal Ahmadjonov img'
				/>
			</Box>
			<Box w={'full'} h={'100vh'} position={'absolute'} px={{ base: '10px', sm: '80px', lg: '150px', xl: '200px' }} pt={'50px'}>
				<Text color={'gray.500'} fontWeight={'300'} fontFamily={'cursive'}>
					{html}
				</Text>
				<Text color={'gray.500'} fontWeight={'300'} fontFamily={'cursive'} pl={4} pt={3}>
					{body}
				</Text>{' '}
				<Text color={'gray.500'} fontWeight={'300'} fontFamily={'cursive'} pl={10} pt={3}>
					{head}
				</Text>
				<Text
					fontSize={{ base: 22, sm: 28, xl: 54 }}
					w={{ xl: '500px' }}
					display={'flex'}
					flexWrap={'wrap'}
					color={'white'}
					pl={12}
					fontFamily={'-moz-initial'}
					pt={2}
				>
					{item.text}
				</Text>
				<Text color={'gray.500'} fontWeight={'300'} fontFamily={'cursive'} pl={10} pt={2}>
					{headClose}
				</Text>{' '}
				<Text color={'gray.500'} fontWeight={'300'} fontFamily={'cursive'} pl={4} pt={2}>
					{parag}
				</Text>
				<Text w={{ xl: '400px' }} color={{ base: 'white', xl: 'gray.400' }} pl={12}>
					{item.decs.slice(0, 90)}...
				</Text>
				<Text color={'gray.500'} fontWeight={'300'} fontFamily={'cursive'} pl={4} pt={2}>
					{paragClose}
				</Text>
				<Text color={'gray.500'} fontWeight={'300'} fontFamily={'cursive'} pl={12} pt={2}>
					{btn}
				</Text>
				<Link href={'/contact'}>
					<Box ml={16} py={2}>
						<Button bg={'transparent'} cursor={'pointer'} colorScheme={'blue'} color={'white'}>
							Contact Me
						</Button>
					</Box>
				</Link>
				<Text color={'gray.500'} fontWeight={'300'} fontFamily={'cursive'} pl={12} pt={2}>
					{btnClose}
				</Text>
			</Box>
			<Box
				w={'full'}
				position={'absolute'}
				bottom={17}
				display={'flex'}
				justifyContent={'space-between'}
				color={'white'}
				pr={{ xl: 5 }}
				pl={{ xl: 5 }}
			>
				<Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
					<Text transform={'rotate(90deg)'} className='scroll'>
						Scroll down
					</Text>
					<Text pt={14}>
						<PiCaretDoubleDown size={'26'} />
					</Text>
				</Box>
				<Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
					<Text transform={'rotate(90deg)'} className='scroll'>
						Scroll down
					</Text>
					<Text pt={14}>
						<PiCaretDoubleDown size={'26'} />
					</Text>
				</Box>
			</Box>
		</Box>
	);
}
