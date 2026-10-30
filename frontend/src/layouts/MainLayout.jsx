import React from 'react';

/**
 * Main Layout Placeholder
 */
export const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <header className="layout-header">Header Placeholder</header>
      <main className="layout-content">{children}</main>
      <footer className="layout-footer">Footer Placeholder</footer>
    </div>
  );
};

export default MainLayout;

