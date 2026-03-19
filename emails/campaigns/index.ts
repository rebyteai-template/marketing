import Welcome from "./welcome/template";
import Reengagement from "./reengagement/template";
import Onboarding from "./onboarding/template";
import ProductUpdate202603 from "./product-update-2026-03/template";
import ProductUpdate20260308 from "./product-update-2026-03-08/template";
import ProductUpdate20260318 from "./product-update-2026-03-18/template";

interface EmailCampaign {
  channel: "email";
  component: React.FC<any>;
  sampleProps: Record<string, string>;
  description: string;
  subject: string;
}

interface SmsCampaign {
  channel: "sms";
  message: string;
  description: string;
}

type Campaign = EmailCampaign | SmsCampaign;

export const campaigns: Record<string, Campaign> = {
  welcome: {
    channel: "email",
    component: Welcome,
    sampleProps: { name: "Jane", email: "jane@example.com" },
    description: "Welcome email for new workspace members",
    subject: "Welcome to Rebyte",
  },
  onboarding: {
    channel: "email",
    component: Onboarding,
    sampleProps: { name: "Jane", email: "jane@example.com" },
    description: "Pro tips for new users after registration",
    subject: "3 Pro Tips for your new Rebyte Workspace",
  },
  reengagement: {
    channel: "email",
    component: Reengagement,
    sampleProps: { name: "Jane", email: "jane@example.com" },
    description: "Re-engage existing users",
    subject: "Skill-powered code agent running in the cloud",
  },
  "product-update-2026-03": {
    channel: "email",
    component: ProductUpdate202603,
    sampleProps: { name: "Jane", email: "jane@example.com" },
    description: "Weekly product update — 4 agents, 2s boot, Anthropic professional skills",
    subject: "Weekly Update: 4 agents, 2-second boot, professional skills",
  },
  "product-update-2026-03-08": {
    channel: "email",
    component: ProductUpdate20260308,
    sampleProps: { name: "Jane", email: "jane@example.com" },
    description: "Weekly update — Go Mobile + Why Every Agent Needs a Box blog",
    subject: "Weekly Update: Rebyte goes mobile + why every agent needs a box",
  },
  "product-update-2026-03-18": {
    channel: "email",
    component: ProductUpdate20260318,
    sampleProps: { name: "Jane", email: "jane@example.com" },
    description: "Weekly update — Serverless agents, recommendations, scheduled tasks, mobile",
    subject: "Weekly Update: Serverless Claw, Scheduled Tasks and More",
  },
  "sms-welcome": {
    channel: "sms",
    message:
      "Hi {name}, welcome to Rebyte! Reply HELP for help or STOP to unsubscribe.",
    description: "Welcome SMS for new phone users",
  },
};
