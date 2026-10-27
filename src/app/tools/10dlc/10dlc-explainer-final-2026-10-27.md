Canonical URL: https://getsurfox.com/tools/10dlc

Title tag: 10DLC Registration and Compliance: Rules, Steps, Rejections

Meta description: What 10DLC is, how A2P 10DLC registration works, and the rules behind common campaign rejections, quoted from CTIA, TCR and carrier sources.

# 10DLC registration and compliance, explained with official sources

Last checked against official sources: Oct 27, 2026

This page summarizes published industry and carrier guidance and is not legal advice.

Every rule below is quoted from an official source, with a link to that source. The sources are CTIA, The Campaign Registry (TCR), Twilio's own documentation, and T-Mobile and Verizon pages. Some examples come from AT&T Office@Hand support and from Bandwidth. Those are labeled as provider guidance, not carrier rules. The full list is in the Sources box at the end.

## 1. What is 10DLC? {#what-is-10dlc}

10DLC stands for 10-digit long code. It is a standard 10-digit phone number used by a business to send text messages to consumers, often called A2P (application-to-person) messaging.

This page walks through registering a brand and a campaign, and the published rules that reviewers apply.

Verizon says it relies on "ensuring that every campaign" is "compliant with the CTIA Messaging Principles and Best Practices." ([Verizon, "How can businesses use text messages to communicate with consumers?"](https://www.verizon.com/about/account-security/smishing-and-spam-text-messages))

### Who's who in 10DLC {#whos-who}

- **Brand:** the business that sends the messages.
- **CSP (campaign service provider):** the messaging provider you register through, such as Twilio.
- **CNP and DCA:** the upstream connection partners that pass campaigns along to the carriers.
- **Carriers:** the mobile networks, such as T-Mobile and Verizon.
- **TCR (The Campaign Registry):** the registry that holds brand and campaign records.

TCR does not decide whether a campaign is approved. In its own words: "The Campaign Registry (TCR) does not review, approve, or reject campaigns. This is solely done by the CSPs and their upstream connection partners." ([TCR FAQ, "How long does it take to approve my Campaign once submitted?"](https://www.campaignregistry.com/resources/))

## 2. How A2P 10DLC registration works {#how-registration-works}

### Step 1: register the brand {#register-the-brand}

Your brand details must match your government tax records. Twilio says: "most Standard or LVS Brands fail because of a mismatch between the business information (exact legal business name, exact address, etc) submitted in the registration process with the Business Profile, and that information as registered with the government tax authority." ([Twilio Docs, "Resubmitting Standard/LVS Brands"](https://www.twilio.com/docs/messaging/compliance/a2p-10dlc/troubleshooting-a2p-brands/troubleshooting-and-rectifying-a2p-standardlvs-brands))

### Step 2: register the campaign {#register-the-campaign}

A campaign describes what you will send and how people agree to receive it. TCR's CSP guide covers each field:

- **Campaign description:** "This field is used to give a clear and detailed description of what the campaign will be used for." ([TCR CSP User Guide, Campaign Description](https://www.campaignregistry.com/wp-content/uploads/CSP-User-Guide_Jul_2026_v2.pdf))
- **Call-to-action and message flow:** "This field is used to describe how a consumer opts-in to the campaign, therefore giving consent to the sender to receive their messages." ([TCR CSP User Guide, Call-to-Action / Message Flow](https://www.campaignregistry.com/wp-content/uploads/CSP-User-Guide_Jul_2026_v2.pdf))
- **Sample messages:** "All campaigns require at least 1 sample message, and some campaign types require a minimum of 2 sample messages." ([TCR CSP User Guide, Sample Messages](https://www.campaignregistry.com/wp-content/uploads/CSP-User-Guide_Jul_2026_v2.pdf))

### Step 3: wait for review {#wait-for-review}

After you submit, the campaign is reviewed by your CSP and its upstream partners, not by TCR. TCR says this review "is solely done by the CSPs and their upstream connection partners." ([TCR FAQ](https://www.campaignregistry.com/resources/)) None of the sources on this page gives a set review time.

### What a rejection looks like and who to ask {#what-a-rejection-looks-like}

A rejection comes back through your provider, with a reason.

- TCR: "If your campaign is rejected for any reason, you will need to speak to your CSP that you registered through." ([TCR FAQ, "What do I do if my Campaign is not approved?"](https://www.campaignregistry.com/resources/))
- TCR: "When declining a shared campaign, CNPs are required to provide a rejection category and explanation." ([TCR CSP User Guide, CNP Campaign Rejections](https://www.campaignregistry.com/wp-content/uploads/CSP-User-Guide_Jul_2026_v2.pdf))
- TCR: "Whenever a campaign is declined, the Upstream CNP who rejected it must provide an explanation (e.g., they could require additional sample messages)." ([TCR developer portal, Declined Campaigns](https://developer.campaignregistry.com/cadp/sharing-campaigns))

## 3. 10DLC compliance basics {#compliance-basics}

Carriers judge campaigns against the CTIA Messaging Principles and Best Practices. Verizon says every campaign must be "compliant with the CTIA Messaging Principles and Best Practices." ([Verizon](https://www.verizon.com/about/account-security/smishing-and-spam-text-messages))

Consent comes first in CTIA's guidance. CTIA says senders "should also document opt-in consent by retaining the following data where applicable: Timestamp of consent acquisition; Consent acquisition medium (e.g., cell-submit form, physical sign-up form, SMS keyword, etc.); Capture of experience (e.g., language and action) used to secure consent" ([CTIA Messaging Principles and Best Practices, 5.1.2 Consumer Opt-In](https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf))

TCR does not rule on compliance: "Please note that TCR is not a compliance house and therefore we cannot comment on compliance matters such as how to collect opt-ins, or the correct way to process opt-outs, etc." ([TCR CSP User Guide, campaign and content attributes](https://www.campaignregistry.com/wp-content/uploads/CSP-User-Guide_Jul_2026_v2.pdf))

T-Mobile also keeps a list of prohibited content: "T-Mobile's Code of Conduct has a list of prohibited content for non-consumer messaging campaigns. While illegal content will never be allowed, some campaigns do require additional review for evaluation of our exception process." ([T-Mobile Support, Consumer versus Non-Consumer Text Messaging](https://www.t-mobile.com/support/plans-features/consumer-versus-non-consumer-text-messaging))

### Quick compliance checklist {#checklist}

Each item links to the rule below. You can also run your campaign through the [10DLC checker](https://getsurfox.com/tools).

- [Your call-to-action carries the required disclosures](#opt-in-wording)
- [Opt-out instructions are present](#opt-out)
- [Consent is optional, unchecked and not bundled](#consent-checkbox)
- [Every opt-in method is described and can be verified](#opt-in-evidence)
- [Recurring programs send an opt-in confirmation](#opt-in-confirmation)
- [Your privacy policy is public and linked](#privacy-policy)
- [Your Terms and Conditions are complete and linked](#terms-and-conditions)
- [Your campaign description matches the use case](#campaign-description)
- [Your sample messages match the campaign](#sample-messages)
- [Links use https and no public shorteners](#links)
- [Phone numbers in messages belong to you](#phone-numbers)
- [Your website is live, public and explains the business](#website)
- [Your brand details match your tax records](#brand-details)
- [You know the brand vetting appeal limits](#vetting-appeals)
- [Your content is not prohibited](#prohibited-content)
- [Age-gated content has a real age gate](#age-gated-content)
- [Each business has its own number and campaign](#shared-numbers)

## 4. Common 10DLC campaign rejections and what the rules require {#common-rejections}

Each reason below states what the rule requires and quotes it. Twilio error codes are Twilio's own labels. AT&T Office@Hand codes are AT&T Office@Hand product guidance, not AT&T carrier rules. Bandwidth DCA2 codes are Bandwidth's list, not TCR's.

### Your call-to-action is missing required disclosures {#opt-in-wording}

**What the rule requires:** where people sign up, the call-to-action tells them who is sending, what the program is, the fees, and the other terms.

- CTIA: "A Call-to-Action should ensure that Consumers are aware of: (1) the program or product description; (2) the telephone number(s) or short code(s) from which messaging will originate; (3) the specific identity of the organization or individual being represented in the initial message; (4) clear and conspicuous language about opt-in and any associated fees or charges; and (5) other applicable terms and conditions (e.g., how to opt-out, customer care contact information, and any applicable privacy policy)." ([CTIA, 5.1.1](https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf))
- TCR: "The call-to-action must be explicitly clear and inform the consumer of the nature of the program. If multiple opt-in methods can be used for the same campaign, you must list them all." ([TCR CSP User Guide, Call-to-Action / Message Flow](https://www.campaignregistry.com/wp-content/uploads/CSP-User-Guide_Jul_2026_v2.pdf))
- T-Mobile: "Content providers should display a clear and conspicuous Call-to-Action with appropriate disclosures to Consumers about the type and purpose of the messaging that Consumers will receive." ([T-Mobile Code of Conduct, 2.5 Calls-to-Action](https://www.t-mobile.com/support/public-files/attachments/T-Mobile%20Code%20of%20Conduct.pdf))
- T-Mobile: "Content Providers should set the proper expectation with the consumer on how many messages they can expect to receive." ([T-Mobile Code of Conduct, 3.6 Set Expectations On Frequency](https://www.t-mobile.com/support/public-files/attachments/T-Mobile%20Code%20of%20Conduct.pdf))
- Twilio: "A required disclosure in the CTA must appear where consent is collected; putting it only in Terms of Service may not resolve the CTA error." ([Twilio Help Center, A2P 10DLC Campaign Registration Rejected](https://help.twilio.com/articles/15778026827291-Why-Was-My-A2P-10DLC-Campaign-Registration-Rejected-))

Twilio codes for this reason ([Twilio Help Center](https://help.twilio.com/articles/15778026827291-Why-Was-My-A2P-10DLC-Campaign-Registration-Rejected-)):

- 30909: "Campaign rejected: Message Flow or Call to Action incomplete/unverified"
- 30544: "Call-to-Action does not state the message purpose"
- 30545: "Call-to-Action does not state message frequency"
- 30568: "Call-to-Action is missing the business or brand name"
- 30569: "Call-to-Action is missing the message and data rates disclosure"
- 30570: "Call-to-Action is missing customer support instructions"
- 30551: "Consent does not specify SMS or text messaging"

### Opt-out instructions are missing or wrong {#opt-out}

**What the rule requires:** messages say how to opt out, using standard STOP wording, and every opt-out is honored.

- CTIA: "Message Senders should state in the message how and what words effect an opt-out. Standardized “STOP” wording should be used for opt-out instructions" ([CTIA, 5.1.3 Consumer Opt-Out](https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf))
- TCR: "Indicates whether the campaign is collecting and processing consumer opt-outs. This is mandatory for all campaign types, except for 2FA and Machine-to-Machine (M2M)." ([TCR CSP User Guide, Subscriber Opt-Out](https://www.campaignregistry.com/wp-content/uploads/CSP-User-Guide_Jul_2026_v2.pdf))
- T-Mobile: "Messaging programs must respond to, at a minimum, the universal keywords STOP, END, CANCEL, UNSUBSCRIBE, and QUIT by sending an opt-out message and, if the user is subscribed, by opting the user out of the program." ([T-Mobile Code of Conduct, 2.8 Opt-Out](https://www.t-mobile.com/support/public-files/attachments/T-Mobile%20Code%20of%20Conduct.pdf))

Twilio codes ([Twilio Help Center](https://help.twilio.com/articles/15778026827291-Why-Was-My-A2P-10DLC-Campaign-Registration-Rejected-)):

- 30887: "Campaign vetting rejection - Opt-out Error"
- 30547: "Call-to-Action is missing opt-out instructions"
- 30539: "Call-to-Action opt-out instructions are present but noncompliant"

AT&T Office@Hand product guidance ([AT&T Office@Hand support](https://asecare.att.com/tutorials/troubleshooting-tcr-sms-application-rejections-att-officehand-95333/?T+Office%40Hand=&product=AT)):

- 9106: "Opt-out language missing from sample messages."

### Consent is pre-checked, required, or bundled {#consent-checkbox}

**What the rule requires:** consent is an active choice, not a condition of service, and marketing consent is collected separately from other consent.

- Twilio: "Marketing and transactional message consent must be consented to separately with two checkboxes." ([Twilio Help Center, A2P 10DLC Campaign Onboarding Guide, Message Flow](https://help.twilio.com/articles/11847054539547-A2P-10DLC-Campaign-Approval-Best-Practices))
- T-Mobile: "Where consent is required, the proposed entities authorized to send must be clearly communicated before obtaining consent" ([T-Mobile Code of Conduct, 2.4 Choice and Consent](https://www.t-mobile.com/support/public-files/attachments/T-Mobile%20Code%20of%20Conduct.pdf))

Twilio codes ([Twilio Help Center](https://help.twilio.com/articles/15778026827291-Why-Was-My-A2P-10DLC-Campaign-Registration-Rejected-)):

- 30925: "Campaign rejected: Opt-in must be unchecked by default; active consent required"
- 30923: "Campaign rejected: Message consent cannot be required for service use"
- 30913: "Campaign rejected: Marketing and informational consent must be separate"
- 30556: "SMS consent is bundled with other communication channels"

Bandwidth DCA2 list ([Bandwidth Support](https://www.bandwidth.com/support/en/articles/12823079-dca2-vetting-rejection-reasons)):

- 803: "Call to Action forces an opt-in consent because it's missing the checkbox. The checkbox is either not present or mandatory, causing a forced opt-in."

### Your opt-in flow can't be verified {#opt-in-evidence}

**What the rule requires:** every opt-in method is described from start to finish, a reviewer can see it, and consent records are kept.

- TCR: "If multiple opt-in methods can be used for the same campaign, you must list them all." ([TCR CSP User Guide, Call-to-Action / Message Flow](https://www.campaignregistry.com/wp-content/uploads/CSP-User-Guide_Jul_2026_v2.pdf))
- CTIA: "Message Senders should also document opt-in consent by retaining the following data where applicable: Timestamp of consent acquisition; Consent acquisition medium (e.g., cell-submit form, physical sign-up form, SMS keyword, etc.); Capture of experience (e.g., language and action) used to secure consent" ([CTIA, 5.1.2 Consumer Opt-In](https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf))

Twilio codes ([Twilio Help Center](https://help.twilio.com/articles/15778026827291-Why-Was-My-A2P-10DLC-Campaign-Registration-Rejected-)):

- 30917: "Campaign rejected: All opt-in methods must include complete workflow descriptions"
- 30896: "Campaign vetting rejection - Opt-in Error"
- 30924: "Campaign rejected: Missing or non-compliant consent agreement language in opt-in flow"
- 30543: "Live opt-in link not provided"
- 30552: "Opt-in is not customer-facing"
- 30555: "First message sent without documented prior consent"

AT&T Office@Hand product guidance ([AT&T Office@Hand support](https://asecare.att.com/tutorials/troubleshooting-tcr-sms-application-rejections-att-officehand-95333/?T+Office%40Hand=&product=AT)):

- 803: "Your website has no language about users opting in to SMS."
- 9104: "You didn’t provide enough details in the how you obtain consent section when you get consent outside of your website."

### No opt-in confirmation message {#opt-in-confirmation}

**What the rule requires:** recurring programs confirm the opt-in with a message that carries set details.

- CTIA: "The confirmation message should include: (1) the program name or product description; (2) customer care contact information (e.g., a toll-free number, 10-digit telephone number, or HELP command instructions); (3) how to opt-out; (4) a disclosure that the messages are recurring and the frequency of the messaging; and (5) clear and conspicuous language about any associated fees or charges and how those charges will be billed." ([CTIA, 5.1.2.1 Confirm Opt-In for Recurring Messages](https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf))
- T-Mobile: "T-Mobile does recommend obtaining a secondary “Double Opt-In" in cases where the consent was initially collected outside of SMS channels, (i.e. phone call, web form, POS, etc.)." ([T-Mobile Code of Conduct, 2.7 Double Opt-In](https://www.t-mobile.com/support/public-files/attachments/T-Mobile%20Code%20of%20Conduct.pdf))

Twilio code ([Twilio Help Center](https://help.twilio.com/articles/15778026827291-Why-Was-My-A2P-10DLC-Campaign-Registration-Rejected-)):

- 30540: "Double opt-in confirmation message is required"

### Privacy policy problems {#privacy-policy}

**What the rule requires:** a privacy policy that can be reached from the call-to-action, and no buying, selling, renting or sharing of opt-in consent.

- CTIA: "All applicable privacy policies should be referenced in and accessible from the initial call-to-action." ([CTIA, 5.2.1](https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf))
- CTIA: "Message Senders should not use opt-in lists that have been rented, sold, or shared to send messages." ([CTIA, 5.1.4 Renting, Selling, or Sharing Opt-In Lists](https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf))
- T-Mobile: "T-Mobile in no way allows consumers' consent to be bought, sold, rented, or shared." ([T-Mobile Code of Conduct, 4.1](https://www.t-mobile.com/support/public-files/attachments/T-Mobile%20Code%20of%20Conduct.pdf))
- T-Mobile: "You should collect the consumer consent yourself, and not use consent acquired from a third party." ([T-Mobile Code of Conduct, 3.5 Direct Consent](https://www.t-mobile.com/support/public-files/attachments/T-Mobile%20Code%20of%20Conduct.pdf))
- Twilio: "Any business with a terms of service or privacy policy that mentions sharing or selling consumer data/opt-in information is considered noncompliant." ([Twilio Help Center, Forbidden Message Categories](https://help.twilio.com/articles/360045004974-Forbidden-message-categories-for-SMS-and-MMS-in-the-US-and-Canada))

Twilio codes ([Twilio Help Center](https://help.twilio.com/articles/15778026827291-Why-Was-My-A2P-10DLC-Campaign-Registration-Rejected-)):

- 30932: "Campaign rejected: Privacy policy must disclose third-party data sharing"
- 30536: "Privacy policy URL is missing, inaccessible, or empty"
- 30550: "No Privacy Policy link found in the opt-in flow"

Bandwidth DCA2 list ([Bandwidth Support](https://www.bandwidth.com/support/en/articles/12823079-dca2-vetting-rejection-reasons)):

- 805: "A compliant privacy policy is required on the website."

### Terms and Conditions problems {#terms-and-conditions}

**What the rule requires:** Terms that cover the program, frequency, support, opt-out, rates and carrier liability, linked near the opt-in.

Twilio codes ([Twilio Help Center](https://help.twilio.com/articles/15778026827291-Why-Was-My-A2P-10DLC-Campaign-Registration-Rejected-)):

- 30882: "Campaign vetting rejection - Terms & Conditions"
- 30557: "Terms of Service missing business or program name"
- 30558: "Terms of Service missing message frequency disclosure"
- 30560: "Terms of Service missing customer support information"
- 30561: "Terms of Service missing opt-out information"
- 30562: "Terms of Service missing message and data rates disclosure"
- 30563: "Terms of Service missing carrier liability disclosure"
- 30549: "No Terms of Service link found in the opt-in flow"
- 30564: "Terms of Service and Privacy Policy links not near opt-in"

### Campaign description or use case mismatch {#campaign-description}

**What the rule requires:** a clear, detailed description of what the campaign is for, under the use case that matches it.

- TCR: "The campaign description should be a clear and detailed outline of exactly what the campaign will be used for. This field should paint an accurate picture so that everyone in the campaign chain can see and understand exactly how this campaign will be used. Lack of clarity can result in campaigns being rejected." ([TCR FAQ, "What should I write in the Campaign Description field?"](https://www.campaignregistry.com/resources/))
- T-Mobile: "Providers must keep all messaging campaigns accurate to what is live in the market." ([T-Mobile Code of Conduct, 3.12 Campaigns Information Accuracy](https://www.t-mobile.com/support/public-files/attachments/T-Mobile%20Code%20of%20Conduct.pdf))

Twilio codes ([Twilio Help Center](https://help.twilio.com/articles/15778026827291-Why-Was-My-A2P-10DLC-Campaign-Registration-Rejected-)):

- 30886: "Campaign vetting rejection - Invalid Campaign Description"
- 30916: "Campaign rejected: Use case mismatch between lead generation and lead nurture"
- 30497: "Use case summary is incomplete or unrelated to the messaging"

Bandwidth DCA2 list ([Bandwidth Support](https://www.bandwidth.com/support/en/articles/12823079-dca2-vetting-rejection-reasons)):

- 601: "Campaign Attributes do not match the website and/or sample message content."

### Sample messages that don't match {#sample-messages}

**What the rule requires:** enough samples for the campaign type, a sample for each use case, the business name in the message, and samples that match the use case.

- TCR: "All campaigns require at least 1 sample message, and some campaign types require a minimum of 2 sample messages." ([TCR CSP User Guide, Sample Messages](https://www.campaignregistry.com/wp-content/uploads/CSP-User-Guide_Jul_2026_v2.pdf))
- T-Mobile: "You should include the business name within the message to ensure that the consumer knows who they are interreacting and not attempt to hide the identity." ([T-Mobile Code of Conduct, 3.7 Business Recognition](https://www.t-mobile.com/support/public-files/attachments/T-Mobile%20Code%20of%20Conduct.pdf))

Twilio codes ([Twilio Help Center](https://help.twilio.com/articles/15778026827291-Why-Was-My-A2P-10DLC-Campaign-Registration-Rejected-)):

- 30893: "Campaign vetting rejection - Inconsistency between Sample Message and Use-case"
- 30538: "A message sample is missing for a selected use case"

AT&T Office@Hand product guidance ([AT&T Office@Hand support](https://asecare.att.com/tutorials/troubleshooting-tcr-sms-application-rejections-att-officehand-95333/?T+Office%40Hand=&product=AT)):

- 9302: "Inconsistency between sample message(s) and use case."
- 9106: "Opt-out language missing from sample messages."

Bandwidth DCA2 list ([Bandwidth Support](https://www.bandwidth.com/support/en/articles/12823079-dca2-vetting-rejection-reasons)):

- 602: "Inaccurate Registration. Inconsistency between the sample message and the use case."

### Public link shorteners and http links {#links}

**What the rule requires:** no shared public URL shorteners, a shortener dedicated to you or branded if you use one, and secure (https) links.

- CTIA: "Where a web address (i.e., Uniform Resource Locator (URL)) shortener is used, Message Senders should use a shortener with a web address and IP address(es) dedicated to the exclusive use of the Message Sender." ([CTIA, 5.3.2 Embedded Website Links](https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf))
- TCR: "Note that public URL shorteners (bitly, tinyurl) are not accepted." ([TCR CSP User Guide, Embedded Link](https://www.campaignregistry.com/wp-content/uploads/CSP-User-Guide_Jul_2026_v2.pdf))
- T-Mobile: "The practice of using public URL shorteners in bulk messaging is highly discouraged, and messages containing them may be subject to blocking." ([T-Mobile Code of Conduct, 4.7](https://www.t-mobile.com/support/public-files/attachments/T-Mobile%20Code%20of%20Conduct.pdf))
- T-Mobile: "Although a full domain is preferred, a branded short URL may be used to deliver custom links." ([T-Mobile Code of Conduct, 3.3 Use One Recognizable Domain Name](https://www.t-mobile.com/support/public-files/attachments/T-Mobile%20Code%20of%20Conduct.pdf))
- Twilio: "For instance, the use of shared or free public URL shorteners is not permitted and will lead to filtering. Ensure that when using a shortened URL it is company branded." ([Twilio Help Center, Forbidden Message Categories](https://help.twilio.com/articles/360045004974-Forbidden-message-categories-for-SMS-and-MMS-in-the-US-and-Canada))

Twilio codes ([Twilio Help Center](https://help.twilio.com/articles/15778026827291-Why-Was-My-A2P-10DLC-Campaign-Registration-Rejected-)):

- 30892: "Campaign vetting rejection - Invalid Sample Message - Public URL Shorteners"
- 30963: "Campaign rejected: public URL shortener detected in campaign"
- 30964: "Campaign rejected: non-secured URL (http://) detected"

AT&T Office@Hand product guidance ([AT&T Office@Hand support](https://asecare.att.com/tutorials/troubleshooting-tcr-sms-application-rejections-att-officehand-95333/?T+Office%40Hand=&product=AT)):

- 9401: "You included a public shortened URL in your sample messages."

### Phone numbers inside messages {#phone-numbers}

**What the rule requires:** a phone number in a message clearly shows who owns it, and the campaign declares that it uses one.

- CTIA: "Messages should not contain phone numbers that are assigned to or forward to unpublished phone numbers, unless the owner (i.e., a person or legally registered business entity) of such phone numbers is unambiguously indicated in the text message." ([CTIA, 5.3.3 Embedded Phone Numbers](https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf))
- TCR: "Indicates whether the campaign is using an embedded phone number (except the required HELP information contact phone number)." ([TCR CSP User Guide, Embedded Phone Number](https://www.campaignregistry.com/wp-content/uploads/CSP-User-Guide_Jul_2026_v2.pdf))

Twilio code ([Twilio Help Center](https://help.twilio.com/articles/15778026827291-Why-Was-My-A2P-10DLC-Campaign-Registration-Rejected-)):

- 30889: "Campaign vetting rejection - Embedded Phone Number"

### Website problems {#website}

**What the rule requires:** a working website that represents the brand, can be viewed without a login, and explains the business and its messaging.

- Twilio: "Website: The URL you provide needs to be functional and represent the brand you're registering. Sites that don't load, return errors, or aren't live yet won't pass review." ([Twilio Help Center, Make Sure Your Data Matches Up](https://help.twilio.com/articles/11847054539547-A2P-10DLC-Campaign-Approval-Best-Practices))

Twilio codes ([Twilio Help Center](https://help.twilio.com/articles/15778026827291-Why-Was-My-A2P-10DLC-Campaign-Registration-Rejected-)):

- 30891: "Campaign vetting rejection - Invalid Website URL"
- 30919: "Campaign rejected: Website lacks sufficient business or messaging use case info"
- 30920: "Campaign rejected: Website is only a form; insufficient business context"
- 30921: "Campaign rejected: Website requires authentication and cannot be reviewed"

### Brand details don't match {#brand-details}

**What the rule requires:** the legal name, address and other brand details match the tax record, and the brand name in messages matches the registered brand.

- Twilio: "most Standard or LVS Brands fail because of a mismatch between the business information (exact legal business name, exact address, etc) submitted in the registration process with the Business Profile, and that information as registered with the government tax authority." ([Twilio Docs, Resubmitting Standard/LVS Brands](https://www.twilio.com/docs/messaging/compliance/a2p-10dlc/troubleshooting-a2p-brands/troubleshooting-and-rectifying-a2p-standardlvs-brands))
- Twilio: "Brand Name: If you register as "Acme Inc" but your messages say "Contoso," reviewers will flag that mismatch." ([Twilio Help Center, Make Sure Your Data Matches Up](https://help.twilio.com/articles/11847054539547-A2P-10DLC-Campaign-Approval-Best-Practices))

Twilio codes ([Twilio Help Center](https://help.twilio.com/articles/15778026827291-Why-Was-My-A2P-10DLC-Campaign-Registration-Rejected-)):

- 30894: "Campaign vetting rejection - Invalid Brand Information"
- 30918: "Campaign rejected: DBA name does not match the legal business name on file"

AT&T Office@Hand product guidance ([AT&T Office@Hand support](https://asecare.att.com/tutorials/troubleshooting-tcr-sms-application-rejections-att-officehand-95333/?T+Office%40Hand=&product=AT)):

- 713: "You didn’t use an email address with your company domain."
- 711: "You’ve used the same EIN for multiple brands registered."

### Brand vetting failed: appeals and limits {#vetting-appeals}

**What the rule requires:** appeals fit TCR's time window and vet status, and each one is charged.

- TCR: "Appeals are allowed for vets created within 45 calendar days" ([TCR Brand Vetting Appeals, Appeal Requirements](https://www.campaignregistry.com/Assets/Brand%20Vetting%20Appeals%20Overview.pdf))
- TCR: "Appeals are only allowed on a Standard Vet in a final state (ACTIVE/FAIL) not a temporary state (PENDING)" ([TCR Brand Vetting Appeals](https://www.campaignregistry.com/Assets/Brand%20Vetting%20Appeals%20Overview.pdf))
- TCR: "Each appeal request is charged regardless of the outcome" ([TCR Brand Vetting Appeals](https://www.campaignregistry.com/Assets/Brand%20Vetting%20Appeals%20Overview.pdf))

### Prohibited and high-risk content {#prohibited-content}

**What the rule requires:** some business types and content are not allowed at all, whatever the wording.

- CTIA: "Message Senders should take affirmative steps and employ tools that can monitor and prevent Unwanted Messages and content, including for example content that: (1) is unlawful, harmful, abusive, malicious, misleading, harassing, excessively violent, obscene/illicit, or defamatory" ([CTIA, 5.3.1](https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf))
- Twilio: "Please note that these forbidden use cases are not only related to the content of the message but the business type itself." ([Twilio Help Center, Forbidden Message Categories](https://help.twilio.com/articles/360045004974-Forbidden-message-categories-for-SMS-and-MMS-in-the-US-and-Canada))
- Twilio, third-party lead generation: "Any third-party use cases are strictly forbidden. Consent must be obtained directly from end-users." ([Twilio Help Center, Forbidden Message Categories](https://help.twilio.com/articles/360045004974-Forbidden-message-categories-for-SMS-and-MMS-in-the-US-and-Canada))
- Twilio, debt: "Debt consolidation, debt reduction and credit repair programs are prohibited regardless if there is first-party consent." ([Twilio Help Center, Forbidden Message Categories](https://help.twilio.com/articles/360045004974-Forbidden-message-categories-for-SMS-and-MMS-in-the-US-and-Canada))
- Twilio, gambling: "Gambling traffic is prohibited in the US and Canada on all number types (Toll Free, Short Code, Long Code, RCS)." ([Twilio Help Center, Forbidden Message Categories](https://help.twilio.com/articles/360045004974-Forbidden-message-categories-for-SMS-and-MMS-in-the-US-and-Canada))
- TCR: "An attestation that Affiliate Marketing will not be a part of this campaign." ([TCR CSP User Guide, Terms & Conditions](https://www.campaignregistry.com/wp-content/uploads/CSP-User-Guide_Jul_2026_v2.pdf))
- T-Mobile: "Due to these issues, we will no longer support any campaign under the following categories, regardless of any prior approval." ([T-Mobile Code of Conduct, 5.2 Disallowed Content](https://www.t-mobile.com/support/public-files/attachments/T-Mobile%20Code%20of%20Conduct.pdf))

Twilio's Forbidden Message Categories article lists more categories, including high-risk financial services, "get rich quick" schemes, cannabis and CBD, prescription drugs, phishing and academic fraud. ([Twilio Help Center, Forbidden Message Categories](https://help.twilio.com/articles/360045004974-Forbidden-message-categories-for-SMS-and-MMS-in-the-US-and-Canada))

Twilio code ([Twilio Help Center](https://help.twilio.com/articles/15778026827291-Why-Was-My-A2P-10DLC-Campaign-Registration-Rejected-)):

- 30951: "Campaign rejected: Third-party lead generation or MLM content detected"
- Twilio's guidance for this code group: "This rejection is ineligible for resubmission under the existing code-specific guidance."

AT&T Office@Hand product guidance ([AT&T Office@Hand support](https://asecare.att.com/tutorials/troubleshooting-tcr-sms-application-rejections-att-officehand-95333/?T+Office%40Hand=&product=AT)):

- 9208: "Your sample messages indicate lead generation or affiliated marketing."
- 708: "One or more of your sample messages intends to generate leads to your business and/or referrals to another company that isn’t yours."

### Age-gated (SHAFT) content {#age-gated-content}

**What the rule requires:** some age-restricted content is never allowed on long code, and where it is allowed, the age gate asks for a date of birth, not a yes or no answer.

- Twilio: "Alcohol traffic is allowed on Toll Free, Short Code, and Long Code in the US, as long as proper age gating procedures are in place. Age gating means that website users must input their date of birth. It cannot be a yes or no question." ([Twilio Help Center, Forbidden Message Categories](https://help.twilio.com/articles/360045004974-Forbidden-message-categories-for-SMS-and-MMS-in-the-US-and-Canada))
- Twilio: "Firearms, Vape, and E-cigarettes are not allowed on Short Code, Toll Free, or Long Code regardless of age gating. Tobacco is allowed on Short Code with proper age gating procedures in place, but isn’t allowed on Long Code or Toll Free." ([Twilio Help Center, Forbidden Message Categories](https://help.twilio.com/articles/360045004974-Forbidden-message-categories-for-SMS-and-MMS-in-the-US-and-Canada))
- Twilio: "The only way to send age-gated traffic into Canada (even with proper age-gating) is to receive a special carrier exemption." ([Twilio Help Center, Forbidden Message Categories](https://help.twilio.com/articles/360045004974-Forbidden-message-categories-for-SMS-and-MMS-in-the-US-and-Canada))
- T-Mobile: "Nonacceptable age gating function includes but is not limited to Yes or No responses. The age-gate mechanism should include the date of birth verification during the consent opt-in of the consumer." ([T-Mobile Code of Conduct, 5.7 Age Gating](https://www.t-mobile.com/support/public-files/attachments/T-Mobile%20Code%20of%20Conduct.pdf))
- TCR: "Indicates whether the campaign includes any age-gated content as defined by Carrier and CTIA guidelines." ([TCR CSP User Guide, Age-Gated Content](https://www.campaignregistry.com/wp-content/uploads/CSP-User-Guide_Jul_2026_v2.pdf))

Twilio code ([Twilio Help Center](https://help.twilio.com/articles/15778026827291-Why-Was-My-A2P-10DLC-Campaign-Registration-Rejected-)):

- 30888: "Campaign vetting rejection - Age Gate Not Present / Not Acceptable"

### One number or campaign shared by several businesses {#shared-numbers}

**What the rule requires:** each business has its own campaign, and a number is not shared across businesses.

- T-Mobile: "The use of shared telephone numbers across multiple businesses, entities, or organizations is prohibited. “Sub-aggregating” a single telephone number with multiple Message Senders is also prohibited." ([T-Mobile Code of Conduct, 4.6 Shared Codes Prohibited](https://www.t-mobile.com/support/public-files/attachments/T-Mobile%20Code%20of%20Conduct.pdf))

Twilio code ([Twilio Help Center](https://help.twilio.com/articles/15778026827291-Why-Was-My-A2P-10DLC-Campaign-Registration-Rejected-)):

- 30926: "Campaign rejected: Multiple companies cannot share a single campaign"

### Who rejected my campaign, and where to appeal {#who-rejected}

**What the rule requires:** you take a rejection to the CSP you registered through. TCR does not make the decision.

- TCR: "The Campaign Registry (TCR) does not review, approve, or reject campaigns. This is solely done by the CSPs and their upstream connection partners." ([TCR FAQ](https://www.campaignregistry.com/resources/))
- TCR: "If your campaign is rejected for any reason, you will need to speak to your CSP that you registered through." ([TCR FAQ](https://www.campaignregistry.com/resources/))

### The baseline every carrier uses {#carrier-baseline}

**What the rule requires:** every campaign follows the CTIA Messaging Principles and Best Practices.

- Verizon: "every campaign" is expected to be "compliant with the CTIA Messaging Principles and Best Practices." ([Verizon](https://www.verizon.com/about/account-security/smishing-and-spam-text-messages))

## 5. Check your campaign before you submit {#check-your-campaign}

The free 10DLC checker walks through the same rules above, field by field, and links each finding back to its official source.

[Check my 10DLC campaign](https://getsurfox.com/tools)

A free tool from SurFox AI

Once you're cleared to text, SurFox AI turns your cold leads into booked calls.

## 6. FAQ {#faq}

### What is 10DLC?

10DLC stands for 10-digit long code, a standard 10-digit number used for business (A2P) texting. Verizon says it relies on every campaign being "compliant with the CTIA Messaging Principles and Best Practices."

Source: [Verizon](https://www.verizon.com/about/account-security/smishing-and-spam-text-messages)

### Do I need to register for 10DLC to text customers from a business number?

The sources on this page describe brand and campaign registration through a CSP, reviewed by "the CSPs and their upstream connection partners." Ask your messaging provider what it requires for your number.

Source: [TCR FAQ](https://www.campaignregistry.com/resources/)

### Does The Campaign Registry approve or reject campaigns?

No. TCR says: "The Campaign Registry (TCR) does not review, approve, or reject campaigns. This is solely done by the CSPs and their upstream connection partners."

Source: [TCR FAQ](https://www.campaignregistry.com/resources/)

### How long does 10DLC campaign approval take?

None of the official sources on this page gives a set time. Review is done by your CSP and its upstream partners, so ask your provider.

Source: [TCR FAQ](https://www.campaignregistry.com/resources/)

### What should a 10DLC call-to-action include?

CTIA says a call-to-action should make people aware of the program description, the sending number, who is sending, fees, and other terms such as how to opt out, customer care contact and any privacy policy.

Source: [CTIA Messaging Principles and Best Practices, 5.1.1](https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf)

### Can I use bit.ly or other public link shorteners in 10DLC messages?

No. TCR says: "Note that public URL shorteners (bitly, tinyurl) are not accepted." CTIA says a shortener should be dedicated to the exclusive use of the sender.

Source: [TCR CSP User Guide, Embedded Link](https://www.campaignregistry.com/wp-content/uploads/CSP-User-Guide_Jul_2026_v2.pdf); [CTIA, 5.3.2](https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf)

### How many sample messages do I need?

TCR says: "All campaigns require at least 1 sample message, and some campaign types require a minimum of 2 sample messages."

Source: [TCR CSP User Guide, Sample Messages](https://www.campaignregistry.com/wp-content/uploads/CSP-User-Guide_Jul_2026_v2.pdf)

### Why was my 10DLC campaign rejected, and what do the error codes mean?

Your CSP gets the rejection reason, and codes depend on the provider. Twilio codes such as 30909 are Twilio's labels, and AT&T Office@Hand codes are that product's guidance, not carrier rules.

Source: [Twilio Help Center](https://help.twilio.com/articles/15778026827291-Why-Was-My-A2P-10DLC-Campaign-Registration-Rejected-); [AT&T Office@Hand support](https://asecare.att.com/tutorials/troubleshooting-tcr-sms-application-rejections-att-officehand-95333/?T+Office%40Hand=&product=AT)

### Can I appeal a failed brand vetting?

TCR allows appeals "for vets created within 45 calendar days" on a vet in a final state, and "Each appeal request is charged regardless of the outcome."

Source: [TCR Brand Vetting Appeals](https://www.campaignregistry.com/Assets/Brand%20Vetting%20Appeals%20Overview.pdf)

### Is 10DLC compliance the same as TCPA compliance?

This page does not cover the TCPA. CTIA's guidance is not legal advice, so ask a lawyer about your legal obligations.

Source: [CTIA, 2.3 Scope, Limitations, & Disclaimer of Legal Guidance or Advice](https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf)

## Sources {#sources}

- [CTIA Messaging Principles and Best Practices (May 2023)](https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf), checked Oct 26, 2026
- [The Campaign Registry, Resources FAQ](https://www.campaignregistry.com/resources/), checked Oct 26, 2026
- [TCR CSP User Guide (Jul 2026 v2)](https://www.campaignregistry.com/wp-content/uploads/CSP-User-Guide_Jul_2026_v2.pdf), checked Oct 27, 2026
- [TCR Brand Vetting Appeals Overview](https://www.campaignregistry.com/Assets/Brand%20Vetting%20Appeals%20Overview.pdf), checked Oct 26, 2026
- [TCR developer portal, Sharing Campaigns](https://developer.campaignregistry.com/cadp/sharing-campaigns), checked Oct 27, 2026
- [Twilio Help Center, A2P 10DLC Campaign Registration Rejected](https://help.twilio.com/articles/15778026827291-Why-Was-My-A2P-10DLC-Campaign-Registration-Rejected-), checked Oct 27, 2026
- [Twilio Help Center, A2P 10DLC Campaign Onboarding Guide](https://help.twilio.com/articles/11847054539547-A2P-10DLC-Campaign-Approval-Best-Practices), checked Oct 26, 2026
- [Twilio Docs, Troubleshooting A2P 10DLC Standard/LVS Brands](https://www.twilio.com/docs/messaging/compliance/a2p-10dlc/troubleshooting-a2p-brands/troubleshooting-and-rectifying-a2p-standardlvs-brands), checked Oct 26, 2026
- [Twilio Help Center, Forbidden Message Categories](https://help.twilio.com/articles/360045004974-Forbidden-message-categories-for-SMS-and-MMS-in-the-US-and-Canada), checked Oct 27, 2026
- [Verizon, Smishing and spam text messages](https://www.verizon.com/about/account-security/smishing-and-spam-text-messages), checked Oct 26, 2026
- [T-Mobile Support, Consumer versus Non-Consumer Text Messaging](https://www.t-mobile.com/support/plans-features/consumer-versus-non-consumer-text-messaging), checked Oct 26, 2026
- [T-Mobile Code of Conduct, Version 2.2 (November 2020)](https://www.t-mobile.com/support/public-files/attachments/T-Mobile%20Code%20of%20Conduct.pdf), checked Oct 27, 2026
- [AT&T Office@Hand support, Troubleshooting TCR SMS Application Rejections (product guidance)](https://asecare.att.com/tutorials/troubleshooting-tcr-sms-application-rejections-att-officehand-95333/?T+Office%40Hand=&product=AT), checked Oct 27, 2026
- [Bandwidth Support, DCA2 vetting rejection reasons (Bandwidth's list)](https://www.bandwidth.com/support/en/articles/12823079-dca2-vetting-rejection-reasons), checked Oct 27, 2026

## Structured data (JSON-LD)

Schema types: Article, FAQPage, BreadcrumbList. FAQ text is reused exactly from section 6.

```json
[
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "10DLC registration and compliance, explained with official sources",
    "description": "What 10DLC is, how A2P 10DLC registration works, and the rules behind common campaign rejections, quoted from CTIA, TCR and carrier sources.",
    "url": "https://getsurfox.com/tools/10dlc",
    "mainEntityOfPage": "https://getsurfox.com/tools/10dlc",
    "dateModified": "2026-10-27",
    "publisher": {
      "@type": "Organization",
      "name": "SurFox AI",
      "url": "https://getsurfox.com"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "url": "https://getsurfox.com/tools/10dlc",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is 10DLC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "10DLC stands for 10-digit long code, a standard 10-digit number used for business (A2P) texting. Verizon says it relies on every campaign being \"compliant with the CTIA Messaging Principles and Best Practices.\""
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to register for 10DLC to text customers from a business number?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The sources on this page describe brand and campaign registration through a CSP, reviewed by \"the CSPs and their upstream connection partners.\" Ask your messaging provider what it requires for your number."
        }
      },
      {
        "@type": "Question",
        "name": "Does The Campaign Registry approve or reject campaigns?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. TCR says: \"The Campaign Registry (TCR) does not review, approve, or reject campaigns. This is solely done by the CSPs and their upstream connection partners.\""
        }
      },
      {
        "@type": "Question",
        "name": "How long does 10DLC campaign approval take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "None of the official sources on this page gives a set time. Review is done by your CSP and its upstream partners, so ask your provider."
        }
      },
      {
        "@type": "Question",
        "name": "What should a 10DLC call-to-action include?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CTIA says a call-to-action should make people aware of the program description, the sending number, who is sending, fees, and other terms such as how to opt out, customer care contact and any privacy policy."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use bit.ly or other public link shorteners in 10DLC messages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. TCR says: \"Note that public URL shorteners (bitly, tinyurl) are not accepted.\" CTIA says a shortener should be dedicated to the exclusive use of the sender."
        }
      },
      {
        "@type": "Question",
        "name": "How many sample messages do I need?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TCR says: \"All campaigns require at least 1 sample message, and some campaign types require a minimum of 2 sample messages.\""
        }
      },
      {
        "@type": "Question",
        "name": "Why was my 10DLC campaign rejected, and what do the error codes mean?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your CSP gets the rejection reason, and codes depend on the provider. Twilio codes such as 30909 are Twilio's labels, and AT&T Office@Hand codes are that product's guidance, not carrier rules."
        }
      },
      {
        "@type": "Question",
        "name": "Can I appeal a failed brand vetting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TCR allows appeals \"for vets created within 45 calendar days\" on a vet in a final state, and \"Each appeal request is charged regardless of the outcome.\""
        }
      },
      {
        "@type": "Question",
        "name": "Is 10DLC compliance the same as TCPA compliance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This page does not cover the TCPA. CTIA's guidance is not legal advice, so ask a lawyer about your legal obligations."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "SurFox AI",
        "item": "https://getsurfox.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Tools",
        "item": "https://getsurfox.com/tools"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "10DLC registration and compliance",
        "item": "https://getsurfox.com/tools/10dlc"
      }
    ]
  }
]
```
