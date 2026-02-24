import React, { useState } from 'react';
import { Container, Section } from '../ui/Section';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqData = [
  {
    question: "Só preciso pagar esse valor para limpar meu nome?",
    answer: "Não, esse valor é apenas para consultarmos suas restrições e propormos a melhor opção de serviço para você."
  },
  {
    question: "Como acessar meu diagnóstico financeiro?",
    answer: "Basta fazer o login com e-mail e senha que chegará no e-mail cadastrado na compra e acessa nossa área de membros. Lá você terá acesso ao link do WhatsApp aonde entrará em contato para receber seu diagnóstico financeiro."
  },
  {
    question: "Esse serviço é seguro?",
    answer: "Sim, nossos serviços são baseados no código de defesa do consumidor e em leis de proteção individual."
  },
  {
    question: "Isso é um curso?",
    answer: "Não, o diagnóstico financeiro é uma análise que vamos te entregar da sua situação financeira."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section className="bg-dark-900/50 border-t border-white/5 relative" id="faq">
      <Container className="max-w-4xl">
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-blue-500/10 border border-blue-500/20">
            <HelpCircle className="w-6 h-6 text-blue-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Perguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Frequentes</span>
          </h2>
          <p className="text-slate-400">Tire suas dúvidas sobre o diagnóstico financeiro.</p>
        </div>

        <div className="space-y-4 reveal delay-100">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`border border-white/5 rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-slate-800/40 border-blue-500/30 shadow-[0_0_20px_-10px_rgba(59,130,246,0.15)]' : 'bg-slate-900/40 hover:bg-slate-800/60'}`}
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`text-base md:text-lg font-medium transition-colors ${openIndex === index ? 'text-blue-300' : 'text-slate-200'}`}>
                  {item.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-blue-400' : ''}`} 
                />
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5 mt-2">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};