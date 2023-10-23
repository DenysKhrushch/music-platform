import React from "react";
/* eslint-disable-next-line */
export interface BackToIconProps {
  style?: any;
}

export function BackToIcon(props: BackToIconProps) {
  return (
    <svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.75 0.25H2.25C1.4175 0.25 0.75 0.9175 0.75 1.75V4.75H2.25V1.75H12.75V12.25H2.25V9.25H0.75V12.25C0.75 12.6478 0.908035 13.0294 1.18934 13.3107C1.47064 13.592 1.85218 13.75 2.25 13.75H12.75C13.1478 13.75 13.5294 13.592 13.8107 13.3107C14.092 13.0294 14.25 12.6478 14.25 12.25V1.75C14.25 0.9175 13.575 0.25 12.75 0.25ZM6.06 9.685L7.125 10.75L10.875 7L7.125 3.25L6.06 4.3075L8.0025 6.25H0.75V7.75H8.0025L6.06 9.685Z"
        fill="#00344E"
      />
    </svg>
  );
}

export default BackToIcon;
