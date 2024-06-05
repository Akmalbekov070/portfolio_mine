import { AboutPages } from '@/components';
import Main from '@/components/main/main';
import MenuPage from '@/components/menu/menu';
import { getAbaoutPage, getAbout, getHeaders, getHero, getPorfolio, getScill } from '@/server';
import { Box } from '@chakra-ui/react';
import { Toaster } from 'sonner';
export default function Home({ header, hero, port, about, scill, AboutPage }) {
	return (
		<Box>
			<MenuPage header={header} />
			<Toaster position='top' />
			<Box>
				<Main hero={hero} port={port} about={about} scill={scill} />
			</Box>
		</Box>
	);
}
export async function getStaticProps() {
	const header = (await getHeaders()) || [];
	const hero = (await getHero()) || [];
	const port = (await getPorfolio()) || [];
	const about = (await getAbout()) || [];
	const scill = (await getScill()) || [];
	const AboutPage = (await getAbaoutPage()) || [];

	return {
		props: { header, hero, port, about, scill, AboutPage },
	};
}
