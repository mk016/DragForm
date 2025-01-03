'use client'; // Ensure this is only rendered client-side

import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import react-dnd components with ssr: false to ensure they are only used client-side
const DndProvider = dynamic(() => import('react-dnd').then((mod) => mod.DndProvider), { ssr: false });

// Import HTML5Backend directly as a default import
import { HTML5Backend } from 'react-dnd-html5-backend';

interface DndClientComponentProps {
  children: ReactNode;
}

const DndClientComponent = ({ children }: DndClientComponentProps) => {
  return (
    <DndProvider backend={HTML5Backend}>
      {children}
    </DndProvider>
  );
};

export default DndClientComponent;
