'use strict';

// whatsapp-integrator — DConnect plugin entrypoint.
// Registers the WhatsApp Business channel with the DConnect workspace.

const CHANNEL = 'whatsapp-business';

function register(workspace) {
  const hooks = {
    channel: CHANNEL,
    onMessage: (msg) => workspace.relay(CHANNEL, msg),
    onCall: (call) => workspace.attachThread(call.id, CHANNEL),
  };
  workspace.use(CHANNEL, hooks);
  return hooks;
}

function selftest() {
  const fake = {
    used: [],
    use(ch) { this.used.push(ch); },
    relay() {},
    attachThread() {},
  };
  register(fake);
  console.log(`whatsapp-integrator ok — channel registered: ${fake.used.join(',')}`);
}

if (require.main === module) {
  if (process.argv.includes('--selftest')) selftest();
}

module.exports = { register };
