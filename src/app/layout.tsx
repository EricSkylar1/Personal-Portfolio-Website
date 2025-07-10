import './styles/globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
	   <html lang='en'>
		<head>
			<link rel="icon" href="data:;base64,iVBORw0KGgo=" />
		</head>
		   <body className='bg-black text-white'>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
