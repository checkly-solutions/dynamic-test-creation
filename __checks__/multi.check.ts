import { MultiStepCheck, RetryStrategyBuilder } from 'checkly/constructs';
import { emailChannel } from './alert.check'

new MultiStepCheck('authentication-crud', {
  name: 'Multi Setup & Teardown Scripts',
  alertChannels: [emailChannel],
  activated: false,
  muted: false,
  shouldFail: false,
  runParallel: true,
  locations: ['us-east-1', 'ca-central-1'],
  tags: ['someServiceName'],
  frequency: 10,
  environmentVariables: [],
  code: {
    entrypoint: '../tests/multi/multi.spec.ts',
  },
  retryStrategy: RetryStrategyBuilder.linearStrategy({
    baseBackoffSeconds: 10,
    maxRetries: 2,
    maxDurationSeconds: 250,
    sameRegion: true,
  }),
});
