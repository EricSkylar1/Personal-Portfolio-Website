import './styles/globals.css';
import Navbar from './components/navbar';
import Footer from './components/footer';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='dark'>
			<body className='bg-white dark:bg-black'>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
