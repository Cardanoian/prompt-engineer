import OpenAI from 'openai';
import { PromptModel } from '../models/PromptModel';

// OpenAI API 호출을 통해 프롬프트 개선
export class PromptController {
	private model: PromptModel;
	private setModel: React.Dispatch<React.SetStateAction<PromptModel>>;
	private openai: OpenAI;

	constructor(
		model: PromptModel,
		setModel: React.Dispatch<React.SetStateAction<PromptModel>>
	) {
		this.model = model;
		this.setModel = setModel;
		this.openai = new OpenAI({
			apiKey: import.meta.env.VITE_OPENAI_API_KEY,
			dangerouslyAllowBrowser: true,
		});
	}

	private formatMessageForAPI(): {
		role: 'system' | 'user';
		content: string;
	}[] {
		return [
			{ role: 'system', content: '' },
			{
				role: 'user',
				content: this.model.input,
			},
		];
	}

	async generatePrompt(): Promise<void> {
		const answer = await this.openai.chat.completions.create({
			model: 'gpt-4o',
			messages: this.formatMessageForAPI(),
			stream: false,
		});
		this.setModel({
			input: this.model.input,
			output: answer.choices[-1].message.content || '',
		});
	}
}
