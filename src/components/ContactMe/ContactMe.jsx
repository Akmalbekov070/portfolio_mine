'use client';
import { formSchema } from '@/lib/validation';
import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';

export default function ContactMe() {
	const [load, setLoad] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: '',
			phone: '',
			message: '',
		},
	});

	const onSubmit = values => {
		setLoad(true);
		const telegramBotId = process.env.NEXT_PUBLIC_TELEGRAM_API;
		const telegramBotKey = process.env.NEXT_PUBLIC_TELEGRAM_KEY_API;

		fetch(`https://api.telegram.org/bot${telegramBotId}/sendMeassage`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'content-control': 'no-cache',
			},
			body: JSON.stringify({
				chat_id: telegramBotKey,
				text: `Name: ${values.username}`,
				email: `Phone: ${values.phone}`,
				message: `Message: ${values.message}`,
			}),
		})
			.then(() => form.reset())
			.finally(() => setLoad(false));
	};
	return (
		<Box
			w={'full'}
			h={{ base: '80vh', xl: '89vh' }}
			bg={'blackAlpha.900'}
			display={'flex'}
			flexDirection={'column'}
			justifyContent={'center'}
			alignItems={'center'}
			pt={24}
			gap={3}
		>
			<form onSubmit={handleSubmit(onSubmit)} className='mx-4 text-white'>
				<Input placeholder='write your name' {...register('username')} className={'w-[400px] bg-slate-700 text-white'} />
				<div>{errors.username && <p className=' text-xl text-red-700 py-2'>{errors.username.message}</p>}</div>

				<Input
					placeholder='write your phone number'
					{...register('phone')}
					className={'w-[400px] bg-slate-700 my-4 text-white'}
				/>
				<div>{errors.username && <p className=' text-xl text-red-700 py-2'>{errors.username.message}</p>}</div>
				<div>
					<Textarea {...register('message')} className={'w-[400px] bg-slate-700 text-white'} />
					<div>{errors.username && <p className=' text-xl text-red-700 py-2'>{errors.username.message}</p>}</div>
					<Button type='submit' className={'my-4'}>
						Submit
					</Button>
				</div>
			</form>
		</Box>
	);
}
