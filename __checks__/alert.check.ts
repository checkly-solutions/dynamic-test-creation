import { EmailAlertChannel } from 'checkly/constructs'

export const emailChannel = new EmailAlertChannel('email-220406', {
  address: 'alerts@acme.com',
  sendRecovery: true,
  sendFailure: true,
  sendDegraded: false,
  sslExpiry: false,
})

/**
* This is a Checkly CLI AlertChannel construct. To learn more, visit:
* - https://www.checklyhq.com/docs/cli/
* - https://www.checklyhq.com/docs/cli/constructs-reference/#alertchannel
*/

import { WebhookAlertChannel } from 'checkly/constructs'

export const webhookChannel = new WebhookAlertChannel('webhook-217634', {
  name: 'Pushover webhook',
  method: 'POST',
  url: new URL('https://webhook.site/ddead495-8b15-4b0d-a25d-f6cda4144dc7'),
  sendRecovery: true,
  sendFailure: true,
  sendDegraded: false,
  sslExpiry: true,
  template: `{
    "token":"FILL_IN_YOUR_SECRET_TOKEN_FROM_PUSHOVER",
    "user":"FILL_IN_YOUR_USER_FROM_PUSHOVER",
    "title":"{{ALERT_TITLE}}",
    "html":1,
    "priority":2,
    "retry":30,
    "expire":10800,
    "message":"{{ALERT_TYPE}} {{STARTED_AT}} ({{RESPONSE_TIME}}ms) {{RESULT_LINK}}"
  }`,
})
