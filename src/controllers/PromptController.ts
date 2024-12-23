import { PromptModel } from '../models/PromptModel';

export class PromptController {
	private model: PromptModel;

	constructor() {
		this.model = new PromptModel();
	}

	async handleImprovePrompt(prompt: string): Promise<string> {
		try {
			return await this.model.improvePrompt(prompt);
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}
