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
		   <body className='bg-gray-900 text-white'>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
