import * as Dialog from '@radix-ui/react-dialog';
import {X} from 'lucide-react';
import { ChangeEvent,  FormEvent, useState } from 'react';
import { toast } from 'sonner';

const NewNoteCard = () => {
    const [shouldShowOnBoarding, setShouldOnBoarding] = useState(true);
    const [content, setContent] = useState('');
    
    const handleStartEditor = () => setShouldOnBoarding(false);

    const handleContentChanged = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value);

        if(event.target.value === '') {
            setShouldOnBoarding(true);
        }
    }  

    const handleSaveNote = (event: FormEvent) => {
        event.preventDefault();

        console.log(content);

        toast.success('Nota criada com sucesso!');
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger className="flex flex-col rounded-md bg-slate-700 text-left p-5 gap-3">
                <span className="text-sm font-medium text-slate-200">
                    Adicionar nota
                </span>
                <p className="text-sm leading-6 text-slate-400">
                    Grave uma nota em aúdio que será convertida para text automaticamente.
                </p>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className='inset-0 fixed bg-black/60' />
                <Dialog.Content className='fixed overflow-hidden left-1/2 to-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md flex flex-col outline-none'>
                    <Dialog.Close className='absolute right-0 top-0 p-1.5 text-slate-400 hover:text-slate-100'>
                        <X className='size-5'/>
                    </Dialog.Close>
                    <form className='flex-1 flex flex-col' onSubmit={handleSaveNote}>
                        <div className='flex flex-1 flex-col gap-3 p-5'>
                            <span className='text-sm font-medium text-slate-300'>
                                Adcionar nota
                            </span>

                            {
                                shouldShowOnBoarding ? ((
                                    <p className='text-sm leading-6 text-slate-400'>
                                        Comece  <button className='font-medium text-lime-400 hover:underline'> gravando uma nota </button> em aúdio ou se preferir <button onClick={handleStartEditor} className='font-medium text-lime-400 hover:underline'> utileze apenas texto </button>.
                                    </p>
                                )) : (
                                    <textarea
                                        autoFocus
                                        className='text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none'
                                        onChange={handleContentChanged}
                                    />
                                )
                            }
                        </div>

                        <button 
                            type='submit'
                            className='w-full bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none font-medium group hover:bg-lime-500'
                        >
                            Salvar nota
                        </button>
                    </form>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export {NewNoteCard}