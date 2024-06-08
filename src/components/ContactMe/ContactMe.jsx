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
		// <Box
		// 	w={'full'}
		// 	h={{ base: '80vh', xl: '89vh' }}
		// 	bg={'blackAlpha.900'}
		// 	display={'flex'}
		// 	flexDirection={'column'}
		// 	justifyContent={'center'}
		// 	alignItems={'center'}
		// 	pt={24}
		// 	gap={3}
		// >
		// 	<form onSubmit={handleSubmit(onSubmit)} className='mx-4 text-white'>
		// 		<Input
		// 			disabled={load}
		// 			placeholder='Write your name'
		// 			{...register('username')}
		// 			className={'w-[400px] bg-slate-700 text-white'}
		// 		/>
		// 		{errors.username && <p className='text-xl text-red-700 py-2'>{errors.username.message}</p>}

		// 		<Input
		// 			placeholder='Write your phone number'
		// 			{...register('phone')}
		// 			className={'w-[400px] bg-slate-700 my-4 text-white'}
		// 			disabled={load}
		// 		/>
		// 		{errors.phone && <p className='text-xl text-red-700 py-2'>{errors.phone.message}</p>}

		// 		<Textarea
		// 			placeholder='Write your message'
		// 			{...register('message')}
		// 			className={'w-[400px] bg-slate-700 text-white'}
		// 			disabled={load}
		// 		/>
		// 		{errors.message && <p className='text-xl text-red-700 py-2'>{errors.message.message}</p>}

		// 		<Button type='submit' disabled={load} className={'my-4'}>
		// 			Submit
		// 		</Button>
		// 	</form>
		// </Box>
		<div className='pt-8'>
			<div className='min-h-screen bg-gray-800 py-6 flex flex-col justify-center sm:py-12 '>
				<div className='relative py-3 sm:max-w-xl sm:mx-auto'>
					<div className='absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl'></div>
					<div className='text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20'>
						<div className='text-center pb-6'>
							<h1 className='text-3xl'>Contact Us!</h1>
							<p className='text-gray-300'>Fill up the form below to send us a message.</p>
						</div>
						<form onSubmit={handleSubmit(onSubmit)}>
							<input
								type='text'
								className='shadow mb-4 appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
								disabled={load}
								placeholder='Write your name'
								{...register('username')}
							/>
							{errors.username && <p className='text-xl text-red-700 py-2'>{errors.username.message}</p>}{' '}
							<input
								type='number'
								className='shadow mb-4 appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
								disabled={load}
								placeholder='Phone Number'
								{...register('phone')}
							/>
							{errors.username && <p className='text-xl text-red-700 py-2'>{errors.username.message}</p>}
							<Textarea
								type='text'
								className=' bg-slate-950 shadow mb-4 appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
								disabled={load}
								placeholder='Phone Number'
								{...register('message')}
							/>
							{errors.username && <p className='text-xl text-red-700 py-2'>{errors.username.message}</p>}
							<input
								type='submit'
								className='shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
								value={'send'}
								disabled={load}
							/>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
