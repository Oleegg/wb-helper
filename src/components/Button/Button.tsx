import "./Button.css";

export type ButtonProps = {
  type: "button" | "submit" | "reset" | undefined;
  name: string;
};

export const Button = ({ name, type = "button" }: ButtonProps) => {
  return <button type={type}>{name}</button>;
};
