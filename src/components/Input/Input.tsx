import "./Input.css";

export type InputProps = {
  id: string;
  type?: string;
  name: string;
  placeholder?: string;
  text?: string;
  autoComplete?: string;
  value: string;
  handler: (e: any) => void;
};

export const Input = ({
  id,
  type = "text",
  name,
  placeholder,
  text = name,
  autoComplete = name,
  value,
  handler,
}: InputProps) => {
  return (
    <>
      <label htmlFor={id} className="label">
        <span className="label__text">{text}</span>
        <input
          value={value}
          type={type}
          id={id}
          name={name}
          autoComplete={autoComplete}
          placeholder={placeholder}
          onChange={handler}
        />
      </label>
    </>
  );
};
