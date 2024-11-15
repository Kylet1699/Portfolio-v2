import { useEffect, useState } from 'react';
import './App.css';

// Shadcn
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';

// Components
import About from './components/About/About';

function App() {
  const [tab, setTab] = useState('home');

  useEffect(() => {
    console.log(tab);
  }, [tab]);

  return (
    <div className="App">
      <header className="header">
        <div className="header-left">
          <span className="text-lg font-medium text-lightOrange">Kyle Tseng</span>
          <span className="text-xs text-muted-foreground">Full Stack Developer</span>
        </div>
        <Tabs defaultValue="home" className="header-middle w-[400px]">
          <TabsList>
            <TabsTrigger value="home" onClick={() => setTab('home')}>
              Home
            </TabsTrigger>
            <TabsTrigger value="Work" onClick={() => setTab('work')}>
              Work
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div></div>
      </header>

      <About />
      {/* 
      <h1>This is Ubuntu font in #cacaca</h1>
      <h2>This is also Ubuntu font in #cacaca</h2>
      <h3>This is DM Mono font in #cacaca</h3>
      <p>This is DM Mono font in #8a8a8a</p>

      <div className="text-green font-ubuntu">Custom styled text</div>
      <div className="text-body font-dm-mono">Custom styled text</div> */}
    </div>
  );
}

export default App;
