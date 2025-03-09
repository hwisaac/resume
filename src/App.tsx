import Education from './components/Education'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Summary from './components/Summary';

function App() {
  return (
    <main className='w-full h-min-screen my-8 text-slate-800 pb-20'>
      <div className='w-full max-w-7xl h-full flex flex-col mx-auto'>
        <header className='flex '>
          <Profile />
        </header>
        <div className='flex flex-col gap-8'>
          <Summary />
          <Skills />
          <Experience />
          {/* <Portfolio /> */}
          <Education />
        </div>
      </div>
    </main>
  );
}

export default App
