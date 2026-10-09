/**
 * Single source of truth for press boilerplate and media contact.
 * Edit here and every release page plus the /news index updates.
 */
export const PRESS = {
  orgName: 'SurFox AI',
  siteUrl: 'https://www.getsurfox.com',
  logoUrl: 'https://www.getsurfox.com/newSurFoxLogo1.png',
  defaultOgImage: 'https://www.getsurfox.com/og-default.png',
  boilerplate:
    'SurFox AI qualifies leads over SMS, website chat, and voice. Teams upload a contact list or add the chat widget to their site, the AI works every conversation, and the team only talks to the contacts who are ready to buy. Learn more at www.getsurfox.com.',
  // PLACEHOLDER: confirm the real press inbox before launch.
  contactName: 'SurFox AI Press Office',
  contactEmail: 'press@getsurfox.com',
  // PLACEHOLDER: drop the real zip into public/press/.
  logoPackPath: '/press/surfox-logo-pack.zip',
} as const;
