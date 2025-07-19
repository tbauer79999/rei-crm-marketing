import React from 'react';
import Nav from './nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
}
