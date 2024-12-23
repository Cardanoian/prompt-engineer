import React, { useState } from 'react';
import { PromptModel, defaultPromptModel } from '../models/PromptModel';
import { PromptController } from '../controllers/PromptController';

const App: React.FC = () => {
	const [model, setModel] = useState<PromptModel>(defaultPromptModel);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const controller: PromptController = new PromptController(model, setModel);

	const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setModel({ ...model, input: e.target.value });
	};

	const handleGenerateClick = async () => {
		setIsLoading(true);
		await controller.generatePrompt();
		setIsLoading(false);
	};

	return (
		<div className='bg-background min-h-screen flex flex-col items-center justify-center p-4'>
			<header className='text-2xl font-bold text-main mb-4'>
				프롬프트 엔지니어
			</header>
			<textarea
				className='w-full max-w-md h-32 p-2 border-2 border-main rounded mb-4'
				placeholder='프롬프트를 입력하세요...'
				value={model.input}
				onChange={handleInputChange}
			/>
			<button
				className='px-4 py-2 bg-main text-white rounded mb-4'
				onClick={handleGenerateClick}
				disabled={isLoading}
			>
				생성
			</button>
			<textarea
				className='w-full max-w-md h-32 p-2 border-2 border-main rounded'
				disabled
				placeholder='생성된 결과가 여기에 나타납니다...'
				value={model.output}
			/>
		</div>
	);
};

export default App;
