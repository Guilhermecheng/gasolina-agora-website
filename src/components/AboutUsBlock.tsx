
const texto = [
    {
        type: 'paragraph',
        text:`
            O Gasolina Agora é um projeto que surgiu em 2022, por dois desenvolvedores, 
            ávidos a trazer uma melhor divulgação de informações a todos os usuários.
        `,
    },
    {
        type: 'subtitle-heading',
        text:'Por que?',
    },
    {
        type: 'paragraph',
        text:`
            Você alguma já tomou um susto com o preço da gasolina ao encher o tanque? 
            Você já parou pra pensar que só sabe realmente quanto vai gastar quando chega ao posto de gasolina? 
            Você não é o único.
        `,
    },
    {
        type: 'paragraph',
        text:`
            O combustível, fonte essencial para grande parte do meios de deslocamento disponíveis, é um dos principais gastos nas casas brasileiras. 
            A variação de seu preço pode causar grande diferença no final do mês, diretamente, ao encher o tanque no posto de gasolina, ou indiretamente, 
            influenciando nos preços de praticamente todos os produtos que você consome, 
            uma vez que a malha rodoviária é o principal meio de transporte para a maioria dos itens que chegam ao mercado, e à sua casa.
        `,
    },
    {
        type: 'subtitle-heading',
        text:'Como?',
    },
    {
        type: 'paragraph',
        text:`
            Pensando nisso, nós do Gasolina Agora sentimos a necessidade de fazer algo para facilitar o acesso a essa informação. 
            Informação essa que é disponível gratuitamente a todos, de forma pouco facilitada. 
            Nosso intuito é utilizar a tecnologia e a facilidade de distribuir a informação que foi possibilitada através da popularização da internet.
        `,
    },
    {
        type: 'paragraph',
        text:`
            Assim, criamos este site como uma ferramenta para trazer essa informação de forma prática e facilitada a você, nosso usuário. 
            Criamos uma ferramenta, utilizando como base de dados as informações divulgadas semanalmente pela ANP - Agência Nacional do Petróleo, Gás Natural e Biocombustíveis, 
            para trazer-lhe o preço atualizado do combustível de sua escolha, em sua localização.
        `,
    },
]

export function AboutUsBlock() {

    return (
        <>
            <span id='price-block-title' className='text-4xl font-semibold my-12'>
                O Gasolina Agora
            </span>

            <div className="max-w-[940px] mx-12 text-base sm:text-lg font-normal space-y-4 mb-10">
                { texto.map((textPart, i) => {
                    if(textPart.type === 'paragraph') {
                        return (
                            <p key={i}>{ textPart.text }</p>
                        )
                    } else if(textPart.type === 'subtitle-heading') {
                        return (
                            <h3 key={i} className="font-semibold text-2xl pt-6">{ textPart.text }</h3>
                        )
                    }
                }) }
            </div>
        </>
    )
}