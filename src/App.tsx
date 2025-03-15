import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { PageLayout } from './components/ui';
import { Home } from './pages/Home';
import { Collections } from './pages/Collections';
import { Custom } from './pages/Custom.tsx';
import { Contact } from './pages/Contact';
import { About } from './pages/About';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/custom" element={<Custom />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageLayout>
      <FloatingCTA />
      <Footer />
    </div>
  );
}

export default App;