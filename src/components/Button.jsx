import { Link } from "react-router-dom";

const Button = ({ label, href = "", variant = "primary", targetBlank = false }) => {
  let styles = "";

  switch (variant) {
    case "primary":
      styles =
        "cursor-pointer w-full block max-w-64 bg-secondary-blue text-center transition text-light-white px-6 py-3 rounded hover:bg-hover-blue font-bold";
      break;
    case "secondary":
      styles =
        "cursor-pointer w-full block max-w-64 bg-white text-center border-2 transition text-secondary-blue px-6 py-3 rounded border-secondary-blue hover:bg-secondary-blue hover:text-light-white font-bold";
      break;
  }

  if (href) {
    return (
      <Link target={targetBlank ? "_blank" : ""} to={href} className={styles}>
        {label}
      </Link>
    );
  }

  return <button className={styles}>{label}</button>;
};

export default Button;
