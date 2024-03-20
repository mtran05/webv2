import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
import { GoogleOAuthProvider } from '@react-oauth/google';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://accounts.google.com/gsi/client?hl=en" async></script>
      </head>
      <body className={`${inter.className} antialiased`}>
        <GoogleOAuthProvider clientId="727880489064-1r15enr1j2gv7vghtnntvefpg7nfh4ht.apps.googleusercontent.com">
        {children}
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}