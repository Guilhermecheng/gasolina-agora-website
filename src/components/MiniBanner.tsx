import { useEffect, useState } from "react";

export function MiniBanner() {
    const [scrollYMoreThanZero, setscrollYMoreThanZero] = useState(false);
    const [isMobileWidth, setIsMobileWidth] = useState(false);

    function listenScrollEvent(event: any) {
        if (window.scrollY < 73 && window.innerWidth > 990) {
            setscrollYMoreThanZero(false);
        } else {
            setscrollYMoreThanZero(true);
        }
    }

    window.addEventListener('scroll', listenScrollEvent);

    // height effect and if mobile no-show
    return (
        <div className={`fixed h-8 w-full ${window.innerWidth < 990 && 'opacity-0 ' } bg-orange-400 text-xs md:text-sm text-zinc-100 font-semibold flex justify-center items-center transition duration-300 ease-in-out ${scrollYMoreThanZero ? 'opacity-0' : 'opacity-1'}`}>
            Conheça também nossa extensão para o Google Chrome!<span className={`${scrollYMoreThanZero ? 'cursor-default' : 'md:cursor-pointer'}`}>&nbsp;Clique aqui</span>&nbsp;para baixar!
        </div>
    )
}