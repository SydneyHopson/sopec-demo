import React from "react";

interface ButtonProps {
  styles?: string;
}

const Buttons = ({ styles = "" }: ButtonProps) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] rounded-[10px] outline-none ${styles}`}
  >
    Sign Up
  </button>
);

export default Buttons;
