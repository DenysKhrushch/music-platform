import React from "react";
/* eslint-disable-next-line */
export interface UserProfileIconProps {}

export function UserProfileIcon(props: UserProfileIconProps) {
  return (
    <svg
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 0.5C3.36 0.5 0 3.86 0 8C0 12.14 3.36 15.5 7.5 15.5C11.64 15.5 15 12.14 15 8C15 3.86 11.64 0.5 7.5 0.5ZM12.27 11.6225C11.1975 10.3175 8.595 9.875 7.5 9.875C6.405 9.875 3.8025 10.3175 2.73 11.6225C1.965 10.6175 1.5 9.365 1.5 8C1.5 4.6925 4.1925 2 7.5 2C10.8075 2 13.5 4.6925 13.5 8C13.5 9.365 13.035 10.6175 12.27 11.6225ZM4.875 6.125C4.875 4.67 6.045 3.5 7.5 3.5C8.955 3.5 10.125 4.67 10.125 6.125C10.125 7.58 8.955 8.75 7.5 8.75C6.045 8.75 4.875 7.58 4.875 6.125Z"
        fill="#00344E"
      />
    </svg>
  );
}

export default UserProfileIcon;
