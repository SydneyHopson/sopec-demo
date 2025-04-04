interface ButtonProps {
    title: string;
    styles?: string;
  }
  
  const Button = ({ title, styles }: ButtonProps) => (
    <button className={`${styles}`}>
      {title}
    </button>
  );
  
  export default Button;
  