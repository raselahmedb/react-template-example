// import React from "react";
import PropTypes from "prop-types";

const Button = ({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}:any) => {
    // Ensure that the type is one of the allowed values
    const buttonType = ["button", "submit", "reset"].includes(type) ? type : "button";

    return (
        <button
            type={buttonType}
            className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    className: PropTypes.string,
};

export default Button;
