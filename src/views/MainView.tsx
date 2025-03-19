import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PromptInput } from './components/PromptInput';
import { GenerateButton } from './components/GenerateButton';
import { ResultDisplay } from './components/ResultDisplay';
import { PromptController } from '../controllers/PromptController';

export const MainView = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('\n\n');
  const [isLoading, setIsLoading] = useState(false);
  const controller = new PromptController();

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const improvedPrompt = await controller.handleImprovePrompt(prompt);
      setResult(improvedPrompt);
    } catch (error) {
      setResult(`Error occurred while generating response\n${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className='flex flex-col  h-screen max-h-[var(--app-height)] overflow-hidden'
      style={{ backgroundColor: '#f0d699' }}
    >
      <Header />
      <main className='flex-grow container mx-auto px-4 py-8 flex flex-col gap-6 overflow-y-auto'>
        <PromptInput value={prompt} onChange={setPrompt} />
        <GenerateButton onClick={handleSubmit} isLoading={isLoading} />
        <ResultDisplay result={result} />
      </main>
      <Footer />
    </div>
  );
};
