import type { Metadata } from 'next';

import './styles/globals.css';

export const metadata: Metadata = {
  title: '피클',
  description: '액티브 시니어 커뮤니티 플랫폼',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko">
      <body className="">{children}</body>
    </html>
  );
};

export default RootLayout;
