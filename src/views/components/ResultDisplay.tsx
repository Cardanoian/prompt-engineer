interface ResultDisplayProps {
	result: string;
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) =>
	result ? (
		<div
			className='w-full p-4 rounded-lg border-2 min-h-[200px]'
			style={{ borderColor: '#304d4e' }}
		>
			<pre className='whitespace-pre-wrap'>{result}</pre>
		</div>
	) : null;
