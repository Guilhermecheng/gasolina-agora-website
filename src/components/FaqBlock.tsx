import * as Accordion from '@radix-ui/react-accordion';
import { Minus, Plus } from 'phosphor-react';
import { faq } from '../content/faq';


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
                            <Accordion.Trigger className={`group text-textmaincolor text-lg sm:text-2xl font-semibold flex justify-between items-center text-start px-4 py-2 w-full bg-zinc-100 border border-b-[#B1B1B1]/70 ${borderRadius}`}>
                                {faqItem.question}

                                <Plus size={24} weight="bold" className='group-data-[state=open]:hidden' />
                                <Minus size={24} weight="bold" className='hidden group-data-[state=open]:block' /> 
                            </Accordion.Trigger>

                            <Accordion.Content className='h-full text-textmaincolor px-8 my-8 text-base sm:text-lg data-[state="open"]:animate-open-accordion data-[state="closed"]:animate-close-accordion'>
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
