import React from "react";
import { DownArrowIcon, PhoneIcon, UpArrowIcon } from "./Icons";

interface Props {
  name: string;
  phone: string;
  subtitle: string;
  callType: "inbound" | "outbound";
  accentColor: string;
  badgeBg?: string;
  badgeTextColor?: string;
}

const AVATAR_TEAL = "#0A4B5C";
const TEXT_PRIMARY = "#101828";
const TEXT_SECONDARY = "#6A7282";
const DIVIDER = "#E5E7EB";

export const CardHeader: React.FC<Props> = ({
  name,
  phone,
  subtitle,
  callType,
  accentColor,
  badgeBg,
  badgeTextColor = "white",
}) => {
  const pillBg = badgeBg ?? accentColor;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 20,
        padding: "28px 32px",
        borderBottom: `1px solid ${DIVIDER}`,
      }}
    >
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          background: AVATAR_TEAL,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <PhoneIcon size={28} />
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          minWidth: 0,
        }}
      >
        <div
          style={{
            fontSize: 26,
            fontWeight: 700,
            color: TEXT_PRIMARY,
            letterSpacing: -0.2,
            lineHeight: 1.2,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontSize: 16,
            color: TEXT_SECONDARY,
            fontWeight: 500,
            lineHeight: 1.35,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {phone}
        </div>
        <div
          style={{
            fontSize: 16,
            color: TEXT_SECONDARY,
            fontWeight: 500,
            lineHeight: 1.35,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {subtitle}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 9,
          padding: "12px 20px",
          borderRadius: 999,
          background: pillBg,
          color: badgeTextColor,
          fontSize: 20,
          fontWeight: 700,
          letterSpacing: 0.1,
          textTransform: "uppercase",
        }}
      >
        {callType === "inbound" ? (
          <DownArrowIcon size={20} color={badgeTextColor} />
        ) : (
          <UpArrowIcon size={20} color={badgeTextColor} />
        )}
        <span>{callType === "inbound" ? "Inbound" : "Outbound"}</span>
      </div>
    </div>
  );
};
