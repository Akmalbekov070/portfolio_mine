import { Box, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { CgMail } from 'react-icons/cg';
import { MdOutlinePhoneInTalk } from 'react-icons/md';

export default function Contact() {
	return (
		<>
			<Box w={'full'} h={'100vh'} bg={'black'} pt={'180px'}>
				<Box w={'full'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
					<Box w={'400px'} h={'400px'} border={'1px'} py={10}>
						<HStack justifyContent={'center'} alignItems={'center'} pl={8} gap={6}>
							<CiLocationOn color='red' size={'55'} />
							<Text w={'full'} color={'white'} fontSize={'20px'}>
								Самарканд, Самаркандская область, Узбекистан
							</Text>
						</HStack>
						<HStack justifyContent={'center'} alignItems={'center'} py={16} gap={6}>
							<CgMail color='red' size={'40'} />
							<Text color={'white'} fontSize={'20px'}>
								akmalbekov2007@gmail.com
							</Text>
						</HStack>
						<HStack py={5} px={'42px'} gap={6}>
							<MdOutlinePhoneInTalk color='red' size={'40'} />
							<Text color={'white'} fontSize={'20px'}>
								+998(91).313.89.89
							</Text>
						</HStack>
					</Box>
				</Box>
			</Box>
		</>
	);
}
