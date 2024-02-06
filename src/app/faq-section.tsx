import { AccordionContent, AccordionTrigger, AccordionItem, Accordion } from '@/components/ui/accordion'

export function FaqSection() {
    return (
        <section id='faq' className='bg-slate-50 dark:bg-transparent container space-y-6 py-8 md:py-12 lg:py-24'>
            <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
                <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>FAQ</h2>
            </div>

            <div className='mx-auto text-center md:max-w-[58rem]'>
            <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='item-1'>
                        <AccordionTrigger>Modulo 1: Introdução</AccordionTrigger>
                        <AccordionContent className='text-left'>
                            Tudo
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='item-2'>
                        <AccordionTrigger>Modulo 2: Introdução</AccordionTrigger>
                        <AccordionContent className='text-left'>
                            Tudo
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='item-3'>
                        <AccordionTrigger>Modulo 3: Introdução</AccordionTrigger>
                        <AccordionContent className='text-left'>
                            Tudo
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='item-4'>
                        <AccordionTrigger>Modulo 4: Introdução</AccordionTrigger>
                        <AccordionContent className='text-left'>
                            Tudo
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}