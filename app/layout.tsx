import { RootProvider } from 'fumadocs-ui/provider';
import './global.css';
import type { ReactNode } from 'react';



export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
