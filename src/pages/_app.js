import { Menu } from '@/components';
import MenuPage from '@/components/menu/menu';
import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
// import { useEffect } from 'react';
// import Aos from 'aos';
import { Client, HydrationProvider } from 'react-hydration-provider';

export default function App({ Component, pageProps }) {
	// useEffect(() => {
	// 	Aos.init({
	// 		duration: 800,
	// 		once: false,
	// 	});
	// }, []);
	return (
		<HydrationProvider>
			<ChakraProvider>
				<Client>
					<MenuPage />
					<Component {...pageProps} />
				</Client>
			</ChakraProvider>
		</HydrationProvider>
	);
}
