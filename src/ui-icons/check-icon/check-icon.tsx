import React from "react";
/* eslint-disable-next-line */
export interface CheckIconProps {}

export function CheckIcon(props: CheckIconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.99996 0.666748C4.41663 0.666748 0.666626 4.41675 0.666626 9.00008C0.666626 13.5834 4.41663 17.3334 8.99996 17.3334C13.5833 17.3334 17.3333 13.5834 17.3333 9.00008C17.3333 4.41675 13.5833 0.666748 8.99996 0.666748ZM7.33329 13.1667L3.16663 9.00008L4.34163 7.82508L7.33329 10.8084L13.6583 4.48341L14.8333 5.66675L7.33329 13.1667Z"
        fill="#C1C7CE"
      />
    </svg>
  );
}

export default CheckIcon;
