import { Toaster } from '@/components/ui/sonner';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='en'>
			<Head />
			<body>
				<Main />
				<Toaster position={'top'} />
				<NextScript />
			</body>
		</Html>
	);
}
