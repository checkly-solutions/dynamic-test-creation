//@ts-nocheck
import { BrowserCheck, RetryStrategyBuilder } from 'checkly/constructs';
import { defaults } from '../tests/defaults';
import { emailChannel, webhookChannel } from './alert.check'

import * as path from 'path';

const serviceTags = defaults.services.map((service) => service.serviceName);

console.log(serviceTags);

new BrowserCheck(`next-danube`, {
  name: `${defaults.bank} Services Smoke - browser`,
  alertChannels: [emailChannel, webhookChannel],
  frequency: 5,
  retryStrategy: RetryStrategyBuilder.linearStrategy({
    baseBackoffSeconds: 5,
    maxRetries: 1,
    sameRegion: false,
  }),
  tags: serviceTags,
  code: {
    entrypoint: path.join(__dirname, '../tests/smoke/smoke-bank.spec.ts'),
  },
});
