interface GenerateButtonProps {
	onClick: () => void;
	isLoading: boolean;
}

export const GenerateButton: React.FC<GenerateButtonProps> = ({
	onClick,
	isLoading,
}) => (
	<button
		onClick={onClick}
		disabled={isLoading}
		className='py-3 px-6 rounded-lg text-white font-bold transition-colors mx-auto'
		style={{ backgroundColor: '#304d4e' }}
	>
		{isLoading ? '생성중...' : '프롬프트 개선'}
	</button>
);
