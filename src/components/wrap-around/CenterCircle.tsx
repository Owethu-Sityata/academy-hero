import centerCircleImg from "@/assets/center-circle.png";

const CenterCircle = () => (
  <div className="relative flex items-center justify-center">
    <img src={centerCircleImg} alt="Center circle" className="w-28 h-28 object-contain" />
  </div>
);

export default CenterCircle;