import * as Accordion from '@radix-ui/react-accordion';
import { Minus, Plus } from 'phosphor-react';

const faq = [
    {
        id: 'faq-1',
        question: 'Como o valor é coletado?',
        answer: [
            'Os preços disponíveis no site são coletados semanalmente de dados públicos brutos da Agência Nacional do Petróleo a partir de empresa contratada - programa de Levantamento de Preços de Combustíveis (LPC), em cumprimento às determinações da Lei do Petróleo (Lei nº 9478/1997, artigo 8º). O Gasolina Agora faz a limpreza desses dados e os estrutura em categorias dentro de uma interface intuitiva para fins de utilidade pública.',
            'A pesquisa abrange gasolina comum e aditivada, etanol hidratado, óleo diesel B, GNV e GLP P13 pesquisados em 459 localidades do território nacional - a pesquisa contempla todos os estados brasileiros e o Distrito Federal e é planejada com base em critérios estatísticos voltados para sua significância e confiabilidade. De modo a garantir a confiabilidade dos dados, os pesquisadores coletam os preços mediante aplicativo eletrônico instalado em aparelho celular equipado com GPS e câmera. Assim, toda visita pode ser confirmada pela confrontação de coordenadas de geolocalização e pela foto do Quadro de Avisos.',
        ],
    },
    {
        id: 'faq-2',
        question: 'Etanol ou gasolina, qual vale mais a pena?',
        answer: [
            'O etanol vale a pena quando custar até 70% do valor da gasolina - isto é, o biocombustível tem, em média, 70% do poder calorífico da gasolina, logo para saber se o etanol mais é vantajoso ou não, basta multiplicar o valor do litro da gasolina por 0,7. Se o valor resultante for menor que o do litro do etanol, é melhor abastecer com gasolina.'
        ],
    },
    {
        id: 'faq-3',
        question: 'Variáveis que influenciam no preço',
        answer: ['No geral, a composição do preço do combustível vem de duas varáveis muito voláteis: a alta no valor do barril de petróleo e a cotação do dólar. Além disso, políticas públicas de subsídios e impostos e a localidade do ponto de venda afetam diretamente na composição final do preço.'],
    },
    {
        id: 'faq-4',
        question: 'Quais os combustíveis mais utilizados?',
        answer: ['asd'],
    },
]


export function FaqBlock() {

    return (
        <section className='w-full flex flex-col items-center mb-8'>
            <span id='price-block-title' className='text-4xl text-textmaincolor font-semibold my-12'>
                Dúvidas frequentes
            </span>

            <p className='text-textmaincolor text-lg sm:text-xl w-[85%] sm:w-[90%] max-w-[940px] mx-10 justify-start mb-8'>
                Um compilado das dúvidas mais frequentes de nossos usuários.
            </p>
        
            <Accordion.Root type='single' collapsible className='w-[90%] max-w-[940px] mb-6 rounded-xl border border-[#B1B1B1] shadow-2xl bg-white'>
                { faq.map((faqItem, i) => {
                    let borderRadius = ''

                    if(i === 0) {
                        borderRadius = 'rounded-t-xl'
                    } else if(i + 1 === faq.length) {
                        borderRadius = 'data-[state="closed"]:rounded-b-xl data-[state="closed"]:border-none'
                    }

                    return (
                        <Accordion.Item key={faqItem.id} value={faqItem.id}>
                            <Accordion.Trigger className={`text-textmaincolor text-lg sm:text-2xl font-semibold flex justify-between text-start px-4 py-2 w-full bg-zinc-100 border border-b-[#B1B1B1]/70 ${borderRadius}`}>
                                {faqItem.question}

                                {/* { props.data-state === 'open' ?  <Plus size={32} weight="bold" /> : <Minus size={32} weight="bold" /> } */}
                            </Accordion.Trigger>

                            <Accordion.Content className='h-full text-textmaincolor px-8 my-8 text-base sm:text-lg transition duration-500 data-[state="open"]:opacity-1 data-[state="open"]:animate-open-accordion data-[state="closed"]:animate-close-accordion data-[state="closed"]:opacity-0'>
                                <div className=''>
                                    {faqItem.answer.map((paragraph, i) => { return <p key={i} className='mt-4'>{ paragraph }</p> })}
                                </div>
                            </Accordion.Content>
                        </Accordion.Item>
                    )
                }) }
            </Accordion.Root>
        </section>
    )
}
