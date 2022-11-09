
interface ConfigMenuProps {
    isconfigPageOpen?: boolean;
}

export function ConfigMenu({ isconfigPageOpen= false }: ConfigMenuProps) {

    return (
        <div id='config-menu' className={`flex flex-col items-center text-textmaincolor mt-6 `}>
            <span id='config-block-title' className='text-4xl font-semibold'>
                Configurações
            </span>

            <div className="h-2xl w-full flex bg-red-500">asd</div>
        </div>
    )
}