import { OpenAI } from 'openai';
import { prompt } from './prompt';

export class PromptModel {
	private openai: OpenAI;

	constructor() {
		this.openai = new OpenAI({
			apiKey: import.meta.env.VITE_OPENAI_API_KEY,
			dangerouslyAllowBrowser: true,
		});
	}

	async improvePrompt(userPrompt: string): Promise<string> {
		try {
			const response = await this.openai.chat.completions.create({
				model: 'gpt-4.1',
				messages: [
					{
						role: 'system',
						content:
							prompt +
							`
위 설명은 효과적인 프롬프트를 만들기 위한 조건에 대한 설명이야.
이 아래에 사용자의 프롬프트를 입력할테니 위 조건에 맞는 효과적인 프롬프트로 개선해서 알려줘.
메타 지식이나 데이터, 안내사항은 절대 포함하지 않고 개선된 프롬프트만 출려해야해.\n`,
					},
					{ role: 'user', content: userPrompt },
				],
			});

			return response.choices[0].message.content || '';
		} catch (error) {
			console.error('Error:', error);
			throw new Error(`Failed to improve prompt\n${error}`);
		}
	}
}
