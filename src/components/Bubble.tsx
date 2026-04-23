import React from "react";
import { useCurrentFrame } from "remotion";
import { Message } from "../data/sequences";
import { CheckIcon, UserIcon } from "./Icons";

const TEXT_BUBBLE = "#364153";
const AGENT_BUBBLE_BG = "#F3F4F6";
const AGENT_AVATAR = "#0A4B5C";

const SUCCESS_BG = "#DCFCE7";
const SUCCESS_FG = "#15803D";
const MUTED_BG = "#F3F4F6";
const MUTED_FG = "#6A7282";

interface Theme {
  patientBubbleBg: string;
  patientAvatarColor: string;
  loadingAccent: string;
  loadingBg: string;
}

interface Props {
  message: Message;
  theme: Theme;
}

const LoadingDots: React.FC<{ color: string }> = ({ color }) => {
  const frame = useCurrentFrame();
  const dot = (i: number) => {
    const phase = ((frame - i * 6) % 30) / 30;
    const opacity = 0.3 + 0.7 * Math.max(0, Math.sin(phase * Math.PI));
    return (
      <span
        key={i}
        style={{
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: color,
          opacity,
          display: "inline-block",
        }}
      />
    );
  };
  return (
    <span
      style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
      aria-hidden
    >
      {[0, 1, 2].map(dot)}
    </span>
  );
};

// Full-width pill used for the "Appointment booked" / "Delivery confirmed" /
// "Call ended" terminal states. Stretches to match the header row width.
const FullWidthStatusPill: React.FC<{
  text: string;
  bg: string;
  fg: string;
  leading?: React.ReactNode;
}> = ({ text, bg, fg, leading }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 14,
      background: bg,
      color: fg,
      padding: "22px 26px",
      borderRadius: 999,
      fontSize: 23,
      fontWeight: 600,
      width: "100%",
      letterSpacing: 0.1,
    }}
  >
    {leading}
    <span>{text}</span>
  </div>
);

// Opening loading pill — matches FullWidthStatusPill sizing so every
// terminal/loading status row has the same footprint.
const LoadingPill: React.FC<{
  text: string;
  bg: string;
  fg: string;
}> = ({ text, bg, fg }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 16,
      background: bg,
      color: fg,
      padding: "22px 26px",
      borderRadius: 999,
      fontSize: 23,
      fontWeight: 600,
      width: "100%",
      letterSpacing: 0.1,
    }}
  >
    <LoadingDots color={fg} />
    <span>{text}</span>
  </div>
);

const ChatBubble: React.FC<{
  text: string;
  bg: string;
  avatarBg: string;
  align: "start" | "end";
}> = ({ text, bg, avatarBg, align }) => (
  <div
    style={{
      display: "flex",
      alignItems: "flex-end",
      gap: 14,
      flexDirection: align === "end" ? "row-reverse" : "row",
      width: "100%",
    }}
  >
    <div
      style={{
        width: 48,
        height: 48,
        borderRadius: "50%",
        background: avatarBg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <UserIcon size={25} color="white" />
    </div>
    <div
      style={{
        background: bg,
        color: TEXT_BUBBLE,
        padding: "18px 24px",
        borderRadius: 22,
        fontSize: 26,
        lineHeight: 1.45,
        maxWidth: "85%",
        fontWeight: 500,
        letterSpacing: -0.05,
        borderBottomRightRadius: align === "end" ? 6 : 22,
        borderBottomLeftRadius: align === "start" ? 6 : 22,
      }}
    >
      {text}
    </div>
  </div>
);

export const Bubble: React.FC<Props> = ({ message, theme }) => {
  switch (message.kind) {
    case "status-loading":
      return (
        <LoadingPill
          text={message.text}
          bg={theme.loadingBg}
          fg={theme.loadingAccent}
        />
      );
    case "status-success":
      return (
        <FullWidthStatusPill
          text={message.text}
          bg={SUCCESS_BG}
          fg={SUCCESS_FG}
          leading={<CheckIcon size={18} color={SUCCESS_FG} />}
        />
      );
    case "status-muted":
      return (
        <FullWidthStatusPill
          text={message.text}
          bg={MUTED_BG}
          fg={MUTED_FG}
        />
      );
    case "agent":
      return (
        <ChatBubble
          text={message.text}
          bg={AGENT_BUBBLE_BG}
          avatarBg={AGENT_AVATAR}
          align="start"
        />
      );
    case "patient":
      return (
        <ChatBubble
          text={message.text}
          bg={theme.patientBubbleBg}
          avatarBg={theme.patientAvatarColor}
          align="end"
        />
      );
  }
};
