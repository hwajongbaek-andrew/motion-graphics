import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Message } from "../data/sequences";
import { Bubble } from "./Bubble";
import { CardHeader } from "./CardHeader";

interface Props {
  name: string;
  phone: string;
  subtitle: string;
  callType: "inbound" | "outbound";
  accentColor: string;
  badgeBg?: string;
  badgeTextColor?: string;
  patientBubbleBg: string;
  patientAvatarColor: string;
  loadingBg: string;
  messages: Message[];
  startOffset: number;
}

const EXIT_FRAMES = 8;

export const ConversationCard: React.FC<Props> = ({
  name,
  phone,
  subtitle,
  callType,
  accentColor,
  badgeBg,
  badgeTextColor,
  patientBubbleBg,
  patientAvatarColor,
  loadingBg,
  messages,
  startOffset,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Loop-safe cycle frame shifted by stagger offset.
  const cycle =
    (((frame - startOffset) % durationInFrames) + durationInFrames) %
    durationInFrames;

  // Resolve which message is active and how far into it we are.
  let acc = 0;
  let activeIndex = 0;
  let frameInMessage = 0;
  for (let i = 0; i < messages.length; i++) {
    if (cycle < acc + messages[i].durationInFrames) {
      activeIndex = i;
      frameInMessage = cycle - acc;
      break;
    }
    acc += messages[i].durationInFrames;
  }

  const current = messages[activeIndex];
  const msgDuration = current.durationInFrames;

  // Enter: spring-driven fade + slide-up from 15px.
  const enter = spring({
    frame: frameInMessage,
    fps,
    config: { damping: 18, stiffness: 140, mass: 0.6 },
    durationInFrames: 20,
  });

  // Exit: hard fade in the final few frames so the next message can take over.
  const exitStart = msgDuration - EXIT_FRAMES;
  const exitProgress =
    frameInMessage > exitStart
      ? Math.min(1, (frameInMessage - exitStart) / EXIT_FRAMES)
      : 0;

  const opacity = enter * (1 - exitProgress);
  const translateY = (1 - enter) * 15 + exitProgress * -8;

  return (
    <div
      style={{
        width: 740,
        background: "white",
        borderRadius: 20,
        border: "1px solid #E5E7EB",
        boxShadow:
          "0 10px 12px -6px rgba(16,24,40,0.08), 0 24px 30px -5px rgba(16,24,40,0.10)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <CardHeader
        name={name}
        phone={phone}
        subtitle={subtitle}
        callType={callType}
        accentColor={accentColor}
        badgeBg={badgeBg}
        badgeTextColor={badgeTextColor}
      />

      <div
        style={{
          padding: "30px 32px 34px 32px",
          height: 240,
          display: "flex",
          alignItems: "center",
          justifyContent: current.kind.startsWith("status")
            ? "center"
            : "flex-start",
        }}
      >
        <div
          style={{
            opacity,
            transform: `translateY(${translateY}px)`,
            width: "100%",
            display: "flex",
            justifyContent: current.kind.startsWith("status")
              ? "center"
              : "flex-start",
            willChange: "transform, opacity",
          }}
        >
          <Bubble
            message={current}
            theme={{
              patientBubbleBg,
              patientAvatarColor,
              loadingAccent: accentColor,
              loadingBg,
            }}
          />
        </div>
      </div>
    </div>
  );
};
