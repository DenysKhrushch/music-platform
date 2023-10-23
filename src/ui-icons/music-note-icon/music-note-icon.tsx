import React from "react";
/* eslint-disable-next-line */
export interface MusicNoteIconProps {
  style?: any;
}

export function MisicNoteIcon(props: MusicNoteIconProps) {
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
        d="M13 6H10V11.5C10 12.163 9.73661 12.7989 9.26777 13.2678C8.79893 13.7366 8.16304 14 7.5 14C6.83696 14 6.20107 13.7366 5.73223 13.2678C5.26339 12.7989 5 12.163 5 11.5C5 10.837 5.26339 10.2011 5.73223 9.73223C6.20107 9.26339 6.83696 9 7.5 9C8.07 9 8.58 9.19 9 9.5V4H13V6ZM16 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16V2C18 1.46957 17.7893 0.960859 17.4142 0.585786C17.0391 0.210714 16.5304 0 16 0Z"
        fill="#59B3EF"
      />
    </svg>
  );
}

export default MisicNoteIcon;
