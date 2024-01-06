interface SelectFieldProps {
  options: string[];
  name: string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectField({ options, name, handleChange }: SelectFieldProps) {
  return (
    <select name={ name } onChange={ handleChange }>
      {options.map((option) => (
        <option value={ option } key={ option }>
          { option }
        </option>
      ))}
    </select>
  );
}
