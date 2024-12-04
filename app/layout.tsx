import type { Metadata } from 'next';
import './globals.css';
import { MENUS } from './global';
import Header from '../components/header';

export const metadata: Metadata = {
    title: 'Home',
    description: 'Home Page',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full">
            <body className={` antialiased h-full`}>
                <div className="flex flex-col h-full bg-gray-100">
                    <Header menus={MENUS} active="/" />
                    <div className="flex-1 flex">
                        <div className="bg-white flex-1 p-4 m-4 rounded-md">{children}</div>
                    </div>
                </div>
            </body>
        </html>
    );
}
