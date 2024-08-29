import { EmailAlertChannel } from 'checkly/constructs'

export const emailChannel = new EmailAlertChannel('email-220406', {
  address: 'alerts@acme.com',
  sendRecovery: true,
  sendFailure: true,
  sendDegraded: false,
  sslExpiry: false,
})
