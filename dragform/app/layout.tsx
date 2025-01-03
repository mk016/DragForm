// app/layout.tsx

import { ReactNode } from 'react';
import DndClientComponent from './DndClientComponents';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <head>
        {/* Add your meta tags, links, etc. here */}
      </head>
      <body>
        <DndClientComponent>
          {children}
        </DndClientComponent>
      </body>
    </html>
  );
};

export default Layout;
