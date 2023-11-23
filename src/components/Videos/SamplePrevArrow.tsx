import { CustomArrowProps } from "react-slick";

const SamplePrevArrow: React.FC<CustomArrowProps> = ({
  className,
  style,
  onClick,
}) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        position: "absolute",
        top: "35%", // Розташовуємо вертикально по центру
        left: "20px", // Змініть це значення, щоб відцентрувати горизонтально
        transform: "translateY(-50%)", // Центруємо вертикально
        zIndex: 1, // Робимо видимими передніми
        cursor: "pointer",
      }}
      onClick={onClick}
    />
  );
};

export default SamplePrevArrow;
