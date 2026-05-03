import { Hr, Text, Link, Section, Row, Column, Img } from "@react-email/components";
import * as React from "react";

export function Footer() {
  return (
    <Section style={footerSection}>
      <Hr style={hr} />
      <Row style={socialRow}>
        <Column style={socialCol}>
          <table role="presentation" cellPadding="0" cellSpacing="0" style={{ margin: "0 auto", textAlign: "center" as const }}>
            <tr><td align="center">
              <Link href="https://x.com/rebyteai">
                <Img src="https://img.icons8.com/ios-filled/32/000000/twitterx.png" width="20" height="20" alt="X" />
              </Link>
            </td></tr>
            <tr><td align="center" style={{ paddingTop: "6px" }}>
              <Link href="https://x.com/rebyteai" style={socialLabel}>Join X</Link>
            </td></tr>
          </table>
        </Column>
        <Column style={socialCol}>
          <table role="presentation" cellPadding="0" cellSpacing="0" style={{ margin: "0 auto", textAlign: "center" as const }}>
            <tr><td align="center">
              <Link href="https://discord.gg/gUuzjeu69C">
                <Img src="https://img.icons8.com/ios-filled/32/5865F2/discord-logo.png" width="20" height="20" alt="Discord" />
              </Link>
            </td></tr>
            <tr><td align="center" style={{ paddingTop: "6px" }}>
              <Link href="https://discord.gg/gUuzjeu69C" style={socialLabel}>Join Discord</Link>
            </td></tr>
          </table>
        </Column>
        <Column style={socialCol}>
          <table role="presentation" cellPadding="0" cellSpacing="0" style={{ margin: "0 auto", textAlign: "center" as const }}>
            <tr><td align="center">
              <Link href="https://www.linkedin.com/company/rebyteai">
                <Img src="https://img.icons8.com/ios-filled/32/0A66C2/linkedin.png" width="20" height="20" alt="LinkedIn" />
              </Link>
            </td></tr>
            <tr><td align="center" style={{ paddingTop: "6px" }}>
              <Link href="https://www.linkedin.com/company/rebyteai" style={socialLabel}>Follow on LinkedIn</Link>
            </td></tr>
          </table>
        </Column>
      </Row>
      <Row style={appRow}>
        <Column style={appBadgeCol}>
          <Link href="https://testflight.apple.com/join/7PKet7nB">
            <Img
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
              width="120"
              height="40"
              alt="Download on the App Store"
              style={badgeImg}
            />
          </Link>
        </Column>
        <Column style={appBadgeCol}>
          <Link href="https://play.google.com/store/apps/details?id=ai.rebyte">
            <Img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              width="135"
              height="40"
              alt="Get it on Google Play"
              style={badgeImg}
            />
          </Link>
        </Column>
      </Row>
      <Text style={footerText}>
        You're receiving this because you signed up for Rebyte.
        <br />
        <Link href="https://rebyte.ai/unsubscribe" style={link}>
          Unsubscribe
        </Link>
      </Text>
    </Section>
  );
}

const footerSection: React.CSSProperties = {
  padding: "0 40px 40px",
};

const hr: React.CSSProperties = {
  borderColor: "#e6ebf1",
  margin: "32px 0",
};

const socialRow: React.CSSProperties = {
  marginBottom: "12px",
  textAlign: "center" as const,
};

const socialLabel: React.CSSProperties = {
  fontSize: "11px",
  color: "#8898aa",
  textDecoration: "none",
  marginTop: "4px",
  display: "block",
};

const socialCol: React.CSSProperties = {
  textAlign: "center" as const,
  width: "33%",
};


const footerText: React.CSSProperties = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "18px",
  textAlign: "center" as const,
  margin: "4px 0",
};

const appRow: React.CSSProperties = {
  marginBottom: "20px",
  textAlign: "center" as const,
};

const appBadgeCol: React.CSSProperties = {
  textAlign: "center" as const,
  paddingLeft: "6px",
  paddingRight: "6px",
};

const badgeImg: React.CSSProperties = {
  display: "inline-block",
};

const link: React.CSSProperties = {
  color: "#8898aa",
  textDecoration: "underline",
};
