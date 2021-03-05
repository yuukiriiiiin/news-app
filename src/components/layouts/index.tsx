import React from 'react';
import {Header} from '../organisms/Header';

export const Layout: React.FC = ({children}) => (
  <>
    <Header />
    <main className="py-10 px-8 bg-gray-50">{children}</main>
  </>
);
