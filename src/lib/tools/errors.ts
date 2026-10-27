// Every failure the visitor can hit has a specific, friendly screen and (where it makes sense) a way forward through the paste box.
// Raw errors never reach the browser.

export type ErrorCode =
  | 'BAD_URL'
  | 'UNREACHABLE'
  | 'TIMEOUT'
  | 'SITE_BLOCKED'
  | 'BLOCKED_ADDRESS'
  | 'NO_TEXT'
  | 'MODEL_FAILED'
  | 'RATE_LIMITED'
  | 'SCANS_PAUSED'
  | 'EMPTY_PASTE'
  | 'UNLOCK_UNAVAILABLE'
  | 'INVALID_EMAIL'
  | 'CONSENT_REQUIRED'
  | 'NOT_FOUND'
  | 'UNAVAILABLE';

export const ERROR_COPY: Record<ErrorCode, { title: string; body: string; paste: boolean }> = {
  BAD_URL: { title: "That doesn't look like a website address", body: 'Enter a full address such as example.com, or paste your text below instead.', paste: true },
  UNREACHABLE: { title: "We couldn't reach that website", body: 'The site did not answer, or the address may be mistyped. Check the address and try again, or paste your text below and we will check that instead.', paste: true },
  TIMEOUT: { title: 'That website took too long to answer', body: 'We wait a few seconds for each page. Try again in a moment, or paste your text below and we will check that instead.', paste: true },
  SITE_BLOCKED: { title: 'That website would not let us read it', body: 'Some sites turn away automatic visitors. Paste your text below and we will check that instead.', paste: true },
  BLOCKED_ADDRESS: { title: "We can't scan that address", body: 'We only read public websites. Enter your public website address, or paste your text below instead.', paste: true },
  NO_TEXT: { title: "We couldn't find readable text on that site", body: 'The pages may load their content with scripts, or contain mostly images. Paste your text below and we will check that instead.', paste: true },
  MODEL_FAILED: { title: "The check didn't finish", body: 'Our checker had a problem and could not complete this one. Nothing was lost. Try again in a minute, or paste your text below.', paste: true },
  RATE_LIMITED: { title: "You've used today's website scans", body: 'Each visitor gets 3 website scans a day. Pasting your text is still open, and your scans reset tomorrow.', paste: true },
  SCANS_PAUSED: { title: 'Website scans are paused right now', body: "Website scans are paused right now. Leave your email and we'll send yours as soon as they're back.", paste: true },
  EMPTY_PASTE: { title: 'Paste something to check', body: 'Add your text to at least one of the boxes, then check again.', paste: false },
  UNLOCK_UNAVAILABLE: { title: "The full report isn't available yet", body: 'Emailing the full report is not switched on yet. The summary above is the free result.', paste: false },
  INVALID_EMAIL: { title: 'Check your email address', body: 'That email address does not look right.', paste: false },
  CONSENT_REQUIRED: { title: 'Please tick the box', body: 'We need your OK on the box before we can email the report.', paste: false },
  NOT_FOUND: { title: "We couldn't find that result", body: 'The link may be wrong or the result may no longer exist. You can run a new check.', paste: false },
  UNAVAILABLE: { title: 'The checker is unavailable right now', body: 'Something on our side is not working. Please try again in a few minutes.', paste: true },
};
