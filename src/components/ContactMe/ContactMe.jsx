'use client';
import { formSchema } from '@/lib/validation';
import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { toast } from 'sonner';

export default function ContactMe() {
	const [load, setLoad] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
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

		const promise = fetch(`https://api.telegram.org/bot${telegramBotId}/sendMessage`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Cache-Control': 'no-cache',
			},
			body: JSON.stringify({
				chat_id: telegramBotKey,
				text: `Name: ${values.username},\nPhone: ${values.phone},\nMessage: ${values.message}`,
			}),
		})
			.then(() => reset())
			.finally(() => setLoad(false));

		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Successfully sent',
			error: 'Error occurred',
		});
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
				<Input
					disabled={load}
					placeholder='Write your name'
					{...register('username')}
					className={'w-[400px] bg-slate-700 text-white'}
				/>
				{errors.username && <p className='text-xl text-red-700 py-2'>{errors.username.message}</p>}

				<Input
					placeholder='Write your phone number'
					{...register('phone')}
					className={'w-[400px] bg-slate-700 my-4 text-white'}
					disabled={load}
				/>
				{errors.phone && <p className='text-xl text-red-700 py-2'>{errors.phone.message}</p>}

				<Textarea
					placeholder='Write your message'
					{...register('message')}
					className={'w-[400px] bg-slate-700 text-white'}
					disabled={load}
				/>
				{errors.message && <p className='text-xl text-red-700 py-2'>{errors.message.message}</p>}

				<Button type='submit' disabled={load} className={'my-4'}>
					Submit
				</Button>
			</form>
		</Box>
	);
}
