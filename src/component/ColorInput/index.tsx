import styles from "./styles.module.css";

type Props = {
  color: number;
  setColor: (newState: number) => void;
  label: string;
};

const ColorInput = ({ color, setColor, label }: Props) => {
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = Number(e.target.value);
    setColor(newColor);
  };
  return (
    <div className={styles.container}>
      <div className={styles.labelContainer}>
        <label>{label}</label>
        <input
          type="range"
          min={0}
          max={label === "Alpha" ? 100 : 255}
          value={color}
          onChange={handleColorChange}
          data-cy={`${label.toLowerCase()}-input`}
        />
      </div>
    </div>
  );
};

export default ColorInput;
