export type MessageKind =
  | "status-loading"
  | "status-success"
  | "status-muted"
  | "agent"
  | "patient";

export interface Message {
  kind: MessageKind;
  text: string;
  durationInFrames: number;
}

// Total durations must equal the composition's durationInFrames (450)
// so each card loops seamlessly back to its first message.

export const leftSequence: Message[] = [
  { kind: "status-loading", text: "Answering call...", durationInFrames: 50 },
  { kind: "agent", text: "Hi Taylor, how may I help you?", durationInFrames: 55 },
  {
    kind: "patient",
    text: "I'd like to book a flu shot appointment.",
    durationInFrames: 60,
  },
  {
    kind: "agent",
    text: "Tomorrow at 2 PM or Thursday at 10 AM?",
    durationInFrames: 65,
  },
  {
    kind: "patient",
    text: "Tomorrow at 2 PM works great.",
    durationInFrames: 55,
  },
  {
    kind: "agent",
    text: "Perfect! Booked for tomorrow at 2 PM.",
    durationInFrames: 55,
  },
  {
    kind: "status-success",
    text: "Appointment booked",
    durationInFrames: 55,
  },
  { kind: "status-muted", text: "Call ended", durationInFrames: 55 },
];

export const rightSequence: Message[] = [
  { kind: "status-loading", text: "Calling patient...", durationInFrames: 55 },
  {
    kind: "agent",
    text: "Hi Sarah, it's Kate from MedMe Pharmacy to coordinate your delivery. Can I confirm your date of birth?",
    durationInFrames: 100,
  },
  {
    kind: "patient",
    text: "Yes it's July 8, 1968.",
    durationInFrames: 55,
  },
  {
    kind: "agent",
    text: "Thanks Sarah! Your next medication is scheduled for July 21.",
    durationInFrames: 80,
  },
  {
    kind: "patient",
    text: "Perfect, thank you!",
    durationInFrames: 55,
  },
  {
    kind: "status-success",
    text: "Delivery confirmed",
    durationInFrames: 50,
  },
  { kind: "status-muted", text: "Call ended", durationInFrames: 55 },
];
