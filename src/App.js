import { useEffect, useState } from 'react';
import './App.css';

// Shadcn
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';

// Components
import About from './components/About/About';
import Projects from './components/Projects/Projects';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function App() {
  const [tab, setTab] = useState('home');

  useEffect(() => {
    console.log(tab);
  }, [tab]);

  return (
    <div className="App">
      <header className="header">
        <div className="header-left">
          <span className="logo max-w-10">曾</span>
          <div className="flex flex-col items-start pl-3">
            <span className="text-lg font-medium">Kyle Tseng</span>
            <span className="text-xs text-muted-foreground">Full Stack Developer</span>
          </div>
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
        <div className="header-right">
          <FontAwesomeIcon icon={faGithub} className="text-3xl" />
          <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
        </div>
      </header>

      <About />

      <Projects />
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
