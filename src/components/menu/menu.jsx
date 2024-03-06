import React from 'react';
import { Box, Button, HStack, Heading, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { BiSolidUserCircle } from 'react-icons/bi';

const Menu = () => {
	return (
		<Box w={'full'} position={'fixed'} top={0} left={0} zIndex={50}>
			<Box w={'full'} h={20} backdropFilter='blur(5px)'>
				<Box
					w={'full'}
					display={'flex'}
					alignItems={'center'}
					justifyContent={'space-between'}
					py={2}
					px={'100px'}
					position={'absolute'}
				>
					<Box w={'full'}>
						<Link href={'/'}>
							<Image
								w={'70px'}
								h={'60px'}
								src='https://logos.textgiraffe.com/logos/logo-name/36087360-designstyle-sharks-m.png'
								alt='akmal'
							/>
						</Link>
					</Box>

					<HStack alignItems={'center'} gap={10} fontWeight={'80'} fontFamily={'cursive'} color={'white'} cursor={'pointer'}>
						{/* {header.map(item => (
								<Text key={item.node.id}>{item.node?.text}</Text>
							))} */}
						<Link href={'/'}>
							<Text>Home</Text>
						</Link>
						<Link href={'/about'}>
							<Text>About</Text>
						</Link>
						<Link href={'/contact'}>
							<Text>Contact</Text>
						</Link>
						<HStack>
							<BiSolidUserCircle fontSize={'20px'} />
						</HStack>
					</HStack>
				</Box>
			</Box>
		</Box>
	);
};

export default Menu;

// import { Box, Button, HStack, Heading, Image, Text } from '@chakra-ui/react';
// import Link from 'next/link';
// import React, { useTransition } from 'react';
// import { BiSolidUserCircle } from 'react-icons/bi';

// export default function MenuPage({ header, hero }) {
// 	console.log(header);
// 	return (
// 		<Box w={'full'} position={'fixed'} top={0} left={0} zIndex={50}>
// 			<Box w={'full'} h={20} backdropFilter='blur(5px)'>
// 				<Box
// 					w={'full'}
// 					display={'flex'}
// 					alignItems={'center'}
// 					justifyContent={'space-between'}
// 					py={2}
// 					px={'100px'}
// 					position={'absolute'}
// 				>
// 					<Box w={'full'}>
// 						<Link href={'/'}>
// 							<Image
// 								w={'70px'}
// 								h={'60px'}
// 								src='https://logos.textgiraffe.com/logos/logo-name/36087360-designstyle-sharks-m.png'
// 								alt='akmal'
// 							/>
// 						</Link>
// 					</Box>

// 					<HStack alignItems={'center'} gap={10} fontWeight={'80'} fontFamily={'cursive'} color={'white'} cursor={'pointer'}>
// 						{/* {header.map(item => (
// 								<Text key={item.node.id}>{item.node?.text}</Text>
// 							))} */}
// 						<Link href={'/'}>
// 							<Text>Home</Text>
// 						</Link>
// 						<Link href={'/about'}>
// 							<Text>About</Text>
// 						</Link>
// 						<Link href={'/contact'}>
// 							<Text>Contact</Text>
// 						</Link>
// 						<HStack>
// 							<BiSolidUserCircle fontSize={'20px'} />
// 						</HStack>
// 					</HStack>
// 				</Box>
// 			</Box>
// 		</Box>
// 	);
// }
