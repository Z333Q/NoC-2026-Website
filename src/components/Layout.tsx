import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import MachineConsole from './MachineConsole';
import type { ViewMode } from './ViewModeToggle';

const VIEW_MODE_KEY = 'noc-view-mode';

function readStoredMode(): ViewMode {
  return localStorage.getItem(VIEW_MODE_KEY) === 'machine' ? 'machine' : 'human';
}

export default function Layout() {
  const [mode, setMode] = useState<ViewMode>(readStoredMode);

  const changeMode = (next: ViewMode) => {
    setMode(next);
    localStorage.setItem(VIEW_MODE_KEY, next);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="min-h-screen flex flex-col noise-overlay">
      <Navbar mode={mode} onModeChange={changeMode} />
      <main className="flex-1">
        {mode === 'machine' ? <MachineConsole onExit={() => changeMode('human')} /> : <Outlet />}
      </main>
      {mode === 'human' && <Footer />}
    </div>
  );
}
