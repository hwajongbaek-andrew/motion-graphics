import React from "react";

// White phone handset (matches teal avatar circle in the SVG)
export const PhoneIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path
      d="M3 3.4C3 3.19 3.08 2.98 3.23 2.83C3.38 2.68 3.59 2.6 3.8 2.6H5.52C5.71 2.6 5.89 2.67 6.04 2.79C6.18 2.91 6.28 3.08 6.31 3.27L6.9 6.82C6.93 6.99 6.9 7.16 6.83 7.31C6.75 7.46 6.62 7.59 6.47 7.66L5.23 8.28C5.68 9.38 6.34 10.38 7.18 11.22C8.02 12.06 9.02 12.72 10.12 13.17L10.74 11.93C10.81 11.78 10.94 11.65 11.09 11.57C11.24 11.5 11.41 11.47 11.58 11.5L15.13 12.09C15.32 12.12 15.49 12.22 15.61 12.36C15.73 12.5 15.8 12.69 15.8 12.88V14.6C15.8 14.81 15.72 15.02 15.57 15.17C15.42 15.32 15.21 15.4 15 15.4H13.4C7.66 15.4 3 10.74 3 5V3.4Z"
      fill="white"
      transform="translate(-2.6,-2.6) scale(0.95)"
    />
  </svg>
);

// Inbound down-arrow (blue badge)
export const DownArrowIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 12,
  color = "white",
}) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
    <path
      d="M9 5.5L6 8.5M6 8.5L3 5.5M6 8.5V1"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Outbound up-arrow (purple badge)
export const UpArrowIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 12,
  color = "white",
}) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
    <path
      d="M3 6.5L6 3.5M6 3.5L9 6.5M6 3.5V11"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Person silhouette (used inside patient/agent avatar bubbles)
export const UserIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 14,
  color = "white",
}) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 7C7.8 7 8.56 6.68 9.12 6.12C9.68 5.56 10 4.8 10 4C10 3.2 9.68 2.44 9.12 1.88C8.56 1.32 7.8 1 7 1C6.2 1 5.44 1.32 4.88 1.88C4.32 2.44 4 3.2 4 4C4 4.8 4.32 5.56 4.88 6.12C5.44 6.68 6.2 7 7 7ZM2 12C2 11.3 2.14 10.6 2.41 9.96C2.68 9.31 3.08 8.72 3.59 8.22C4.1 7.72 4.7 7.32 5.36 7.05C6.02 6.78 6.72 6.64 7.43 6.64C8.14 6.64 8.83 6.78 9.49 7.05C10.15 7.32 10.75 7.72 11.26 8.22C11.77 8.72 12.17 9.31 12.44 9.96C12.71 10.6 12.85 11.3 12.85 12H2Z"
      fill={color}
    />
  </svg>
);

// Check-circle for the "booked" / "confirmed" success status bubble
export const CheckIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 14,
  color = "#16A34A",
}) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="6" stroke={color} strokeWidth="1.5" />
    <path
      d="M4.5 7.3L6.2 9L9.5 5.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
