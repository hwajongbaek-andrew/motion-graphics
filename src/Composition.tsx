import { AbsoluteFill } from "remotion";
import { ConversationCard } from "./components/ConversationCard";
import { leftSequence, rightSequence } from "./data/sequences";
import { FONT_FAMILY } from "./fonts";

export const MyComposition = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "rgba(0,0,0,0)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 32,
        padding: 40,
        fontFamily: FONT_FAMILY,
      }}
    >
      <ConversationCard
        name="Taylor Chen"
        phone="+1 (555) 123-4567"
        subtitle="Incoming call"
        callType="inbound"
        accentColor="#1447E6"
        patientBubbleBg="#EFF6FF"
        patientAvatarColor="#2B7FFF"
        loadingBg="#EFF6FF"
        messages={leftSequence}
        startOffset={0}
      />
      <ConversationCard
        name="Sarah Miller"
        phone="+1 (555) 987-6543"
        subtitle="Medication Delivery"
        callType="outbound"
        accentColor="#8200DB"
        badgeBg="#C3C430"
        badgeTextColor="#063E54"
        patientBubbleBg="#F0FDFA"
        patientAvatarColor="#0A4B5C"
        loadingBg="#FAF5FF"
        messages={rightSequence}
        startOffset={18}
      />
    </AbsoluteFill>
  );
};
