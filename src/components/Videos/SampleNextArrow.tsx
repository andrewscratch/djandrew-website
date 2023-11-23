import { CustomArrowProps } from "react-slick";

const SampleNextArrow: React.FC<CustomArrowProps> = ({
  className,
  style,
  onClick,
}) => {
  return (
    <div
      className={`${className} custom-arrow-next`}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "35%",
        right: "20px",
        transform: "translateY(-50%)",
        zIndex: 1,
        cursor: "pointer",
      }}
      onClick={onClick}
    />
  );
};

export default SampleNextArrow;
