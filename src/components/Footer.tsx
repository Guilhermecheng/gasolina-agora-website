import { useEffect, useState } from 'react'
import { ReactComponent as WhiteLogo} from '../assets/logo-gray.svg'
import { GoogleChromeLogo } from 'phosphor-react';

export function Footer() {
    const [isMobileWidth, setIsMobileWidth] = useState(false);

    function handleResize() {
        if(window.innerWidth < 767) {
            setIsMobileWidth(true);
        } else {
            setIsMobileWidth(false);
        }
    }

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize, false);
    }, [])

    return (
        <>
            <div className="w-full h-full min-h-[250px]">
                <div className=" sm:w-[90%] my-10 text-neutral-300 flex flex-col items-center space-y-6 md:space-y-0 md:space-x-4 md:grid md:grid-cols-2">

                    <div className="block mb-4 md:w-full md:flex md:flex-col items-center">
                        <WhiteLogo className="h-[60px] sm:h-[70px] mb-4" />
                        <h3 className='text-2xl font-semibold tracking-wide'>Gasolina Agora</h3>
                    </div>

                    <div className="block mb-4 md:w-full md:flex md:flex-col items-center">
                        <div>
                            <h3 className='text-xl font-semibold mb-2 sm:mb-4'>Entre em contato conosco</h3>

                            <ul>
                                <li>Email: contato@gasolinaagora.com.br</li>
                                <li></li>
                            </ul>

                            { !isMobileWidth && (
                                <div className='mt-10'>
                                    <h3 className='text-xl font-semibold mb-2 sm:mb-4'>Baixe nossa extensão para o Chrome</h3>

                                    <div className='flex items-center space-x-2 hover:underline hover:underline-offset-4 hover:cursor-pointer '>
                                        <GoogleChromeLogo size={20} />
                                        <a href="#">Chrome Web Store</a>
                                    </div>
                                </div>

                            ) }
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-10 text-sm text-zinc-500 flex items-center justify-center bg-black">
                © Gasolina Agora 2022. Todos os direitos reservados.
            </div>
        </>
    )
}