import React from "react";
/* eslint-disable-next-line */
export interface ContentManagementIconProps {}

export function ContentManagementIcon(props: ContentManagementIconProps) {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M25 0L6.25 14.5833L9.64583 17.2292L25 29.1667L40.3333 17.2292L43.75 14.5833L25 0ZM40.3542 22.3542L25 34.3125L9.625 22.375L6.25 25L25 39.5833L43.75 25L40.3542 22.3542ZM40.3542 32.7708L25 44.7292L9.625 32.7917L6.25 35.4167L25 50L43.75 35.4167L40.3542 32.7708Z"
        fill="white"
      />
    </svg>
  );
}

export default ContentManagementIcon;
