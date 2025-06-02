import React, { FC } from "react";
interface PasswordStrengthProps {
  passwordStrength: string;
  strengthColor: string;
}
const PasswordStrength: FC<PasswordStrengthProps> = ({ passwordStrength, strengthColor }) => {
  const handleColors = () => {
    if (passwordStrength === "Strong") {
      return "#ECFFED";
    }
    if (passwordStrength === "Weak") {
      return "#FFD9D7";
    }
    if (passwordStrength === "Fair") {
      return "#FFEDD8";
    }
    return "";
  };
  return (
    <div className="py-2 px-4 rounded-[16px]" style={{ backgroundColor: handleColors() }}>
      <span style={{ color: strengthColor }} className="">
        {passwordStrength}
      </span>
    </div>
  );
};

export default PasswordStrength;
