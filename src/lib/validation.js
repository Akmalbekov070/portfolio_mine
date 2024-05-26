'use client';

import { z } from 'zod';

export const formSchema = z.object({
	username: z.string().min(2).max(50),
	phone: z.number(),
	message: z.string().min(10).max(30),
});
