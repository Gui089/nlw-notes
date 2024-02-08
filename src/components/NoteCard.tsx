
const NoteCard = () => {
    return (
        <button className='outline-none rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400'>
            <span className='text-sm font-medium text-slate-300'>Há 2 dias</span>
            <p className='text-sm leading-6 text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed itaque repudiandae, veniam distinctio doloremque officiis. Sit maiores sint laboriosam quas deleniti cumque facilis consequuntur in iste, dolor impedit! Inventore, magnam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores iure commodi, excepturi iste doloribus officiis enim perferendis laudantium voluptatum aliquid eum corrupti, ratione, minus quidem nihil dignissimos consequuntur recusandae quam. Grave uma nota em aúdio que será convertida para texto automaticamente</p>

            <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none'/>
        </button>
    )
}

export {NoteCard};