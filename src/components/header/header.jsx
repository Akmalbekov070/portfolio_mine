import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { PiCaretDoubleDown } from 'react-icons/pi';
import ParticilBg from '../particiles/particilBg';

export default function Header(props) {
	const { html, body, head, head2, parag, htmlClose, bodyClose, headClose, head2Close, paragClose, btn, btnClose, item } = props;

	return (
		<Box w={'full'} h={'100vh'} position={'relative'} pt={12}>
			{/* <ParticilBg /> */}
			<Box w={'full'} h={'full'} top={6} left={0} position={'absolute'} zIndex={0}>
				<Image w={'full'} h={'full'} pl={'300px'} src={item.img.url} alt='Akmal Ahmadjonov img' />
			</Box>
			<Box w={'full'} h={'100vh'} position={'absolute'} px={'200px'} pt={'50px'}>
				<Text color={'gray.500'} fontWeight={'300'} fontFamily={'cursive'}>
					{html}
				</Text>
				<Text color={'gray.500'} fontWeight={'300'} fontFamily={'cursive'} pl={4} pt={3}>
					{body}
				</Text>{' '}
				<Text color={'gray.500'} fontWeight={'300'} fontFamily={'cursive'} pl={10} pt={3}>
					{head}
				</Text>
				<Heading fontSize={54} w={'500px'} color={'white'} pl={12} fontFamily={'-moz-initial'} pt={2}>
					{item.text}
				</Heading>
				<Text color={'gray.500'} fontWeight={'300'} fontFamily={'cursive'} pl={10} pt={2}>
					{headClose}
				</Text>{' '}
				<Text color={'gray.500'} fontWeight={'300'} fontFamily={'cursive'} pl={4} pt={2}>
					{parag}
				</Text>
				<Text w={'400px'} color={'gray.400'} pl={12}>
					{item.decs.slice(0, 90)}...
				</Text>
				<Text color={'gray.500'} fontWeight={'300'} fontFamily={'cursive'} pl={4} pt={2}>
					{paragClose}
				</Text>
				<Text color={'gray.500'} fontWeight={'300'} fontFamily={'cursive'} pl={12} pt={2}>
					{btn}
				</Text>
				<Link href={'/contact'}>
					<Box w={'full'} ml={16} py={2}>
						<Button cursor={'pointer'}>Contact Me</Button>
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
				pr={5}
				pl={5}
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
