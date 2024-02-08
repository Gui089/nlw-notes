import logo from './assets/Logo.svg';
import { NoteCard } from './components/NoteCard';
import { NewNoteCard } from './components/NewNoteCard';

const note = {
  date: new Date(),
  content: 'Texto do card'
}

function App() {
  return (
    <div className="mx-12 max-w-6xl my-12 space-y-6">
        <img className='w-[160px] mb-8' src={logo} alt="logo da app" />
        
        <form className="w-full">
            <input 
              type="text" 
              placeholder='Busque em suas notas...'
              className='w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500'
              />
        </form>
        <div className='h-px bg-slate-700' />

        <div className='grid grid-cols-3 gap-6 auto-rows-[250px]'>
        
        <NewNoteCard />
        <NoteCard note={note}/>      

        </div>
    </div>
  );
}

export default App;
