'use client';
import { formSchema } from '@/lib/validation';
import { Box } from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';

export default function ContactMe() {
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
		console.log(values);
	};
	return (
		<Box
			w={'full'}
			h={{ base: '80vh', xl: '89vh' }}
			bg={'blackAlpha.800'}
			display={'flex'}
			flexDirection={'column'}
			justifyContent={'center'}
			alignItems={'center'}
			pt={24}
			gap={3}
		>
			<form onSubmit={handleSubmit(onSubmit)} className='mx-4'>
				<Input placeholder='write your name' {...register('username')} className={'w-[400px] bg-slate-700'} />
				<div>{errors.username && <p className=' text-xl text-red-700 py-2'>{errors.username.message}</p>}</div>

				<Input placeholder='write your phone number' {...register('phone')} className={'w-[400px] bg-slate-700 my-4'} />
				<div>{errors.username && <p className=' text-xl text-red-700 py-2'>{errors.username.message}</p>}</div>
				<div>
					<Textarea {...register('message')} className={'w-[400px] bg-slate-700'} />
					<div>{errors.username && <p className=' text-xl text-red-700 py-2'>{errors.username.message}</p>}</div>
					<Button type='submit' className={'my-4'}>
						Submit
					</Button>
				</div>
			</form>
		</Box>
	);
}
