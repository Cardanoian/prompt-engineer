interface ResultDisplayProps {
  result: string;
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) =>
  result ? (
    <div className='overflow-y-auto p-4 rounded-lg border-2 min-h-[200px] border-tealCustom max-h-64 sm:max-h-80 md:max-h-96 lg:max-h-[30rem] xl:max-h-[35rem]'>
      <div className='whitespace-pre-wrap text-base'>{result}</div>
    </div>
  ) : null;
