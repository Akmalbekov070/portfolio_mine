import { Menu } from '@/components';
import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Client, HydrationProvider } from 'react-hydration-provider';

export default function App({ Component, pageProps }) {
	return (
		<HydrationProvider>
			<ChakraProvider>
				<Client>
					<Menu />
					<Component {...pageProps} />
				</Client>
			</ChakraProvider>
		</HydrationProvider>
	);
}
