import { getScill } from '@/server';
import { Box, Card, CardBody, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

export default function ScillName({ param }) {
	const [scillDetail, setScillDetail] = useState([]);
	useEffect(() => {
		getScill().then(res => setScillDetail(res));
	}, []);
	const scillItem = scillDetail.filter(item => item.node.text === param.name);
	console.log(scillItem);
	return (
		<Box w={'full'} h={'100vh'} bg={'black'} zIndex={10}>
			{scillItem.map(item => (
				<Box
					key={item.node.id}
					w={'full'}
					display={'flex'}
					pt={9}
					justifyContent={'center'}
					position={'absolute'}
					top={20}
					left={0}
					color={'white'}
				>
					<Card maxW='xl'>
						<CardBody>
							<Image
								w={'560px'}
								h={'350px'}
								src={item.node.img.url}
								alt='Green double couch with wooden legs'
								borderRadius='lg'
							/>
							<Stack mt='6' spacing='3'>
								<Heading size='md'>{item.node.text}</Heading>
								<Text>
									This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who
									love a chic design with a sprinkle of vintage design.
								</Text>
							</Stack>
						</CardBody>
						<Divider />
					</Card>
				</Box>
			))}
		</Box>
	);
}
