interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const PromptInput: React.FC<PromptInputProps> = ({
  value,
  onChange,
}) => (
  <textarea
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className='w-full p-4 rounded-lg border-2 focus:outline-none focus:ring-2 border-tealCustom'
    rows={6}
    placeholder='프롬프트를 입력해주세요.'
  />
);
