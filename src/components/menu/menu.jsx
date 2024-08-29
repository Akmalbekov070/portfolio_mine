import React from 'react';
import { Box, Button, HStack, Heading, Image, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { BiSolidUserCircle } from 'react-icons/bi';
import { RxHamburgerMenu } from 'react-icons/rx';

const MenuPage = () => {
	return (
		<Box w={'full'} position={'fixed'} top={0} left={0} zIndex={50}>
			<Box w={'full'} h={20} backdropFilter='blur(5px)'>
				<Box
					w={'full'}
					display={'flex'}
					alignItems={'center'}
					justifyContent={'space-between'}
					py={2}
					px={{ base: '30px', sm: '20px', lg: '50px', xl: '100px' }}
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

					<HStack
						display={{ base: 'none', lg: 'flex' }}
						alignItems={'center'}
						gap={10}
						fontWeight={'80'}
						fontFamily={'cursive'}
						color={'blue.300'}
						cursor={'pointer'}
					>
						{/* {header.map(item => (
								<Text key={item.node.id}>{item.node?.text}</Text>
							))} */}
						<Link href={'/'} className='hover:text-white'>
							<Text>Home</Text>
						</Link>
						<Link href={'/about'} className='hover:text-white'>
							<Text>About</Text>
						</Link>
						<Link href={'/contact'} className='hover:text-white'>
							<Text>Contact</Text>
						</Link>
						<Link href={'/newspagePath'} className='hover:text-white'>
							<Text>News</Text>
						</Link>
					</HStack>
					<Box display={{ base: 'flex', lg: 'none' }} alignItems={'center'} zIndex={50}>
						<Menu>
							<MenuButton aria-label='Options' variant='outline' color={'white'}>
								<RxHamburgerMenu size={'28'} />
							</MenuButton>
							<MenuList>
								<MenuItem>
									<Link href={'/'}>Home</Link>
								</MenuItem>
								<MenuItem>
									<Link href={'/about'}>About</Link>
								</MenuItem>
								<MenuItem>
									<Link href={'/contact'}>Contact</Link>
								</MenuItem>
								<MenuItem>
									<Link href={'/newspagePath'}>
										<Text>News</Text>
									</Link>
								</MenuItem>
							</MenuList>
						</Menu>
					</Box>
					<HStack color={'red'} pl={'20px'}>
						<BiSolidUserCircle fontSize={'20px'} className='hover:text-white' />
					</HStack>
				</Box>
			</Box>
		</Box>
	);
};

export default MenuPage;

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
