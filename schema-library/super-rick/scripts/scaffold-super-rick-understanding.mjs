#!/usr/bin/env node
/**
 * Scaffold Super Rick understanding docs from stationary templates.
 * Doctrine: schema-library/super-rick/doctrine.md (intent-quality-super-rick)
 * Prototype: standard-voice-stack/understandings/Super-Rick-Why-Guide.md
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SCHEMA_ROOT = path.resolve(__dirname, '..');
const IQSR_ROOT = path.resolve(SCHEMA_ROOT, '../..');
const TEMPLATE_DIR = path.join(SCHEMA_ROOT, 'templates');
const SCHEMA_PATH = path.join(SCHEMA_ROOT, 'schemas/super-rick-understanding.doc.schema.json');
const YSJ_REGISTRY_PATH = path.join(SCHEMA_ROOT, 'registry/ysj-mirror.registry.json');

const BUNDLE_KINDS = [
  'declaration-of-intent',
  'comp',
  'why-guide',
  'ledger',
  'gap-analysis',
  'bridge-plan',
  'repo-inventory',
];

const KIND_TO_TEMPLATE = {
  'declaration-of-intent': 'declaration-of-intent.template.md',
  'why-guide': 'why-guide.template.md',
  comp: 'comp.template.md',
  ledger: 'ledger.template.md',
  'gap-analysis': 'gap-analysis.template.md',
  'bridge-plan': 'bridge-plan.template.md',
  'repo-inventory': 'repo-inventory.template.md',
  'architecture-l3': 'architecture-l3.template.md',
  'cross-product-patterns': 'cross-product-patterns.template.md',
  'full-stack-undressing': 'full-stack-undressing.template.md',
  'fleet-audit': 'fleet-audit.template.md',
  'incident-gap': 'incident-gap.template.md',
  'numbered-understanding': 'numbered-understanding.template.md',
  'platform-handbook-mirror': 'platform-handbook-mirror.template.md',
  audit: 'audit.template.md',
  architecture: 'architecture.template.md',
  benchmark: 'benchmark.template.md',
  'model-ranking': 'model-ranking.template.md',
  'setup-specs': 'setup-specs.template.md',
  incident: 'incident.template.md',
  'understandings-readme': 'understandings-readme.template.md',
};

const KIND_TO_OUTPUT = {
  'declaration-of-intent': 'Super-Rick-{{DOMAIN_TITLE}}-Declaration-of-Intent.md',
  comp: 'PRIVATE {{DOMAIN_UPPER}}-FIRST AI SYSTEM — COMP.md',
  'why-guide': 'Super-Rick-{{DOMAIN_TITLE}}-Why-Guide.md',
  ledger: 'Super-Rick-{{DOMAIN_TITLE}}-Stack-Ledger.md',
  'gap-analysis': 'PRIVATE {{DOMAIN_UPPER}}-FIRST AI SYSTEM — GAP ANALYSIS.md',
  'bridge-plan': 'PRIVATE {{DOMAIN_UPPER}}-FIRST AI SYSTEM — BRIDGE PLAN.md',
  'repo-inventory': '{{DOMAIN_UPPER}}-STACK-REPO-INVENTORY.md',
  'architecture-l3': '{{SUBSYSTEM_NAME}}-ARCHITECTURE-L3.md',
  'cross-product-patterns': '{{SIBLING_PRODUCT}}-{{DOMAIN_TITLE}}-Patterns.md',
  'full-stack-undressing': 'FULL-STACK-UNDRESSING.md',
  'fleet-audit': '{{DOMAIN_TITLE}}-Fleet-Audit-{{AUDIT_DATE}}.md',
  'incident-gap': '{{INCIDENT_SLUG}}-{{INCIDENT_DATE}}.md',
  'numbered-understanding': '{{NUMBER}}-{{SLUG}}.md',
  'platform-handbook-mirror': '{{YSJ_SETUP_CHAPTER_BASENAME}}.md',
  audit: '{{SUBSYSTEM_NAME}}-AUDIT.md',
  architecture: '{{SUBSYSTEM_NAME}}-ARCHITECTURE.md',
  benchmark: '{{BENCHMARK_TOPIC}}-BENCHMARK-{{AUDIT_DATE}}.md',
  'model-ranking': '{{DOMAIN_TITLE}}-Model-Ranking-{{YEAR}}.md',
  'setup-specs': '{{DOMAIN_TITLE}}-Setup-Specs.md',
  incident: '{{INCIDENT_SLUG}}-Postmortem-{{INCIDENT_DATE}}.md',
  'understandings-readme': 'README.md',
};

function usage() {
  console.log(`Super Rick understanding scaffold

Usage:
  node scripts/scaffold-super-rick-understanding.mjs --check
  node scripts/scaffold-super-rick-understanding.mjs --kind why-guide --domain chat --title "Super Rick Chat" --out ./out.md
  node scripts/scaffold-super-rick-understanding.mjs --bundle --domain chat --title "Super Rick Chat" --out ./understandings/

Required context (bundle or single):
  --domain voice|video|chat|vision|presence|other
  --title "Super Rick Chat"          Human product name
  --slug super-rick-chat             kebab slug (default from title)
  --repo-hub standard-chat-stack     hub repo id

Optional:
  --kind <kind>                      Single form only (default: bundle)
  --bundle                           Write minimum 7-doc bundle (declaration-of-intent first)
  --comp-version 1.0.0
  --ledger-id INT-0000
  --hashtag #super-rick-chat
  --cassette chat                    Pockit cassette id
  --door http://chat.localhost/
  --out <file-or-dir>
  --mirror-ysj                       Print YSJ setup chapter path from registry after scaffold
  --force                            Overwrite existing files
`);
}

function parseArgs(argv) {
  const opts = { bundle: false, force: false, mirrorYsj: false };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--check') opts.check = true;
    else if (a === '--help' || a === '-h') opts.help = true;
    else if (a === '--bundle') opts.bundle = true;
    else if (a === '--force') opts.force = true;
    else if (a === '--mirror-ysj') opts.mirrorYsj = true;
    else if (a.startsWith('--')) {
      const key = a.slice(2).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      opts[key] = argv[++i];
    }
  }
  return opts;
}

function titleCase(s) {
  return s.replace(/\b\w/g, (c) => c.toUpperCase());
}

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/super\s*rick\s*/i, '')
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '') || 'product';
}

function domainUpper(domain) {
  return domain === 'other' ? 'PRODUCT' : domain.toUpperCase();
}

function readPockitVersion() {
  const nephewRoot =
    process.env.NEPHEW_ROOT || path.join(path.dirname(IQSR_ROOT), 'nephew');
  try {
    const p = path.join(nephewRoot, 'containers/nephew-ct/family-hub/pockit-surface.json');
    return JSON.parse(fs.readFileSync(p, 'utf8')).version;
  } catch {
    return '0.0.0';
  }
}

function easternNow() {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).formatToParts(new Date());
  const get = (type) => parts.find((p) => p.type === type)?.value ?? '';
  return `${get('weekday')}, ${get('month')} ${get('day')}, ${get('year')} at ${get('hour')}:${get('minute')} ${get('dayPeriod')} Eastern`;
}

function auditDateSlug() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function loadYsjRegistry(domain) {
  if (!fs.existsSync(YSJ_REGISTRY_PATH)) return null;
  const registry = JSON.parse(fs.readFileSync(YSJ_REGISTRY_PATH, 'utf8'));
  return registry.domains?.[domain] ?? null;
}

function buildContext(opts) {
  const title = opts.title || 'Super Rick Product';
  const slug = opts.slug || `super-rick-${slugify(title)}`;
  const domain = opts.domain || 'other';
  const domainTitle = title.replace(/^Super Rick\s*/i, '').trim() || titleCase(domain);
  const domainUpperVal = domainUpper(domain);
  const domainNoun = domain === 'other' ? 'product' : domain;
  const ysjRow = loadYsjRegistry(domain);
  const ysjSetup = ysjRow?.setup_chapter ?? `docs/setup/NN-${domain}-stack-full-undressing.md`;
  const ysjInference = ysjRow?.inference_chapter ?? `docs/setup/NN-${domain}-inference-setup.md`;
  const ysjSkill = ysjRow?.ai_skill ?? `ai-skills/${domain}-systems.md`;
  const chapterNum = ysjSetup.match(/^docs\/setup\/(\d+)-/)?.[1] ?? 'NN';

  return {
    TITLE: title,
    SLUG: slug,
    DOMAIN: domain,
    DOMAIN_TITLE: domainTitle,
    DOMAIN_UPPER: domainUpperVal,
    DOMAIN_NOUN: domainNoun,
    REPO_HUB: opts.repoHub || `standard-${domain}-stack`,
    COMP_VERSION: opts.compVersion || '1.0.0',
    LEDGER_ID: opts.ledgerId || 'INT-0000',
    HASHTAG: opts.hashtag || `#${slug}`,
    CASSETTE_ID: opts.cassette || domain,
    DOOR_URL: opts.door || `http://${domain}.localhost/`,
    POCKIT_VERSION: readPockitVersion(),
    POCKIT_ALIAS: domainTitle,
    LAST_SYNCED: easternNow(),
    COMP_DATE: easternNow().split(' at')[0],
    ADOPTION_MONTH: new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' }),
    YEAR: String(new Date().getFullYear()),
    AUDIT_DATE: auditDateSlug(),
    STALENESS_DATE: auditDateSlug(),
    INCIDENT_DATE: auditDateSlug(),
    RANKING_DOC: `${domainTitle}-Model-Ranking-${new Date().getFullYear()}.md`,
    BENCHMARK_TOPIC: domainUpperVal,
    EMOJI: domain === 'voice' ? '🎙' : domain === 'video' ? '🎬' : domain === 'chat' ? '💬' : '✨',
    CONFIG_PATH: `data/${domain}-config.json`,
    PRIMARY_API: `POST /api/v1/${domain}/turn`,
    OPS_DOOR: opts.door || `http://${domain}.localhost/super-rick`,
    LEGACY_NAME: `legacy ${domain} pad`,
    SIBLING_PRODUCT: 'Ready Play',
    SIBLING_REPO_PATH: '~/Developer/SwiftApps/red-e-play-app',
    PLAN_ID: '0000-super-rick-product-bridge.md',
    SUBSYSTEM_NAME: 'Example-Processor',
    NUMBER: '0001',
    STATUS: 'draft',
    SOURCE: `operator ${auditDateSlug()}`,
    APPLIES_TO: `${domain} stack agents`,
    TAGS: `#${slug} #super-rick`,
    INCIDENT_SLUG: `${domainTitle}-Incident`,
    INCIDENT_TITLE: `${domainTitle} Incident`,
    NEPHEW_SHA: 'pending',
    YSJ_SETUP_CHAPTER: ysjSetup,
    YSJ_SETUP_CHAPTER_BASENAME: path.basename(ysjSetup, '.md'),
    YSJ_INFERENCE_CHAPTER: ysjInference,
    YSJ_AI_SKILL: ysjSkill,
    AI_SKILL_FILE: path.basename(ysjSkill),
    AI_SKILL_PATH: ysjSkill,
    CHAPTER_NUM: chapterNum,
    RELATED_CHAPTER: domain === 'voice' ? '11' : 'NN',
    RELATED_CHAPTER_SLUG: domain === 'voice' ? '11-voice-parakeet-premium-stack' : `NN-${domain}-premium-stack`,
    RELATED_CHAPTER_TITLE: domain === 'voice' ? '11 — Parakeet premium stack' : `${chapterNum} — ${domainTitle} premium stack`,
    CONSUMER_REPO: 'red-e-play-app',
    CONSUMER_ROLE: 'Consumer product patterns',
    API_PATH: `src/tower-api/routes/${domain}.js`,
    VERIFY_BLOCK: `make smoke-${domain}  # or domain-specific health curls`,
    TURN_FLOW_ONE_LINER: 'Mic → STT → cache → retrieve → draft → audit → TTS → speaker',
    SERVICE: 'tower-api',
    PORT: '8088',
    NOTES: 'Nephew runtime',
    MODEL_ALIAS: 'nephew:fast',
    LOCATION: 'Ollama edge',
    ROLE: 'Draft replies',
    CONFIG_BLOCK: 'quality_covenant',
    VALUES: 'sovereign — no cloud TTS',
  };
}

function substitute(template, ctx) {
  return template.replace(/\{\{([A-Z0-9_]+)\}\}/g, (_, key) => {
    if (key in ctx) return String(ctx[key]);
    return `{{${key}}}`;
  });
}

function resolveOutPath(kind, ctx, outOpt) {
  const pattern = KIND_TO_OUTPUT[kind];
  const filename = substitute(pattern, ctx);
  if (!outOpt) return path.join(process.cwd(), filename);
  if (outOpt.endsWith('.md')) return outOpt;
  if (fs.existsSync(outOpt) && fs.statSync(outOpt).isDirectory()) {
    return path.join(outOpt, filename);
  }
  if (!path.extname(outOpt)) return path.join(outOpt, filename);
  return outOpt;
}

function checkTemplates() {
  const missing = [];
  for (const file of Object.values(KIND_TO_TEMPLATE)) {
    const p = path.join(TEMPLATE_DIR, file);
    if (!fs.existsSync(p)) missing.push(p);
  }
  if (!fs.existsSync(SCHEMA_PATH)) missing.push(SCHEMA_PATH);
  if (!fs.existsSync(YSJ_REGISTRY_PATH)) missing.push(YSJ_REGISTRY_PATH);
  if (missing.length) {
    console.error('✗ missing template/schema files:\n', missing.map((m) => `  ${m}`).join('\n'));
    process.exit(1);
  }
  const registry = JSON.parse(fs.readFileSync(YSJ_REGISTRY_PATH, 'utf8'));
  const domainCount = Object.keys(registry.domains ?? {}).length;
  console.log(`✓ Super Rick understanding templates OK (${Object.keys(KIND_TO_TEMPLATE).length} kinds)`);
  console.log(`  doctrine: schema-library/super-rick/doctrine.md`);
  console.log(`  templates: schema-library/super-rick/templates/`);
  console.log(`  YSJ mirror registry: ${domainCount} domain(s) in schema-library/super-rick/registry/ysj-mirror.registry.json`);
}

function writeDoc(kind, ctx, outOpt) {
  const templateFile = KIND_TO_TEMPLATE[kind];
  if (!templateFile) throw new Error(`Unknown kind: ${kind}`);
  const templatePath = path.join(TEMPLATE_DIR, templateFile);
  const raw = fs.readFileSync(templatePath, 'utf8');
  const body = substitute(raw, ctx);
  const outPath = resolveOutPath(kind, ctx, outOpt);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  if (fs.existsSync(outPath) && !ctx.force) {
    console.warn(`  skip (exists): ${outPath}`);
    return null;
  }
  fs.writeFileSync(outPath, body, 'utf8');
  console.log(`  wrote ${outPath}`);
  return outPath;
}

function main() {
  const opts = parseArgs(process.argv);
  if (opts.help) {
    usage();
    process.exit(0);
  }
  if (opts.check) {
    checkTemplates();
    process.exit(0);
  }

  if (!opts.domain && !opts.title) {
    console.error('Provide --domain and --title (or --help)');
    process.exit(1);
  }

  const ctx = buildContext(opts);
  ctx.force = opts.force;

  const kinds = opts.bundle ? BUNDLE_KINDS : [opts.kind || 'why-guide'];
  const outBase = opts.out || process.cwd();

  console.log(`Scaffolding Super Rick understandings for ${ctx.TITLE} (${ctx.DOMAIN})`);
  for (const kind of kinds) {
    if (!KIND_TO_TEMPLATE[kind]) {
      console.error(`Unknown kind: ${kind}`);
      process.exit(1);
    }
    writeDoc(kind, ctx, outBase);
  }

  if (opts.mirrorYsj || kinds.includes('full-stack-undressing')) {
    const ysjRow = loadYsjRegistry(ctx.DOMAIN);
    if (ysjRow) {
      console.log('\nYSJ platform handbook mirror (author hub first, then diff):');
      console.log(`  yousirjuan/${ysjRow.setup_chapter}`);
      if (ysjRow.inference_chapter) console.log(`  yousirjuan/${ysjRow.inference_chapter}`);
      console.log(`  Audit: node schema-library/super-rick/scripts/audit-super-rick-ysj-mirror.mjs --domain ${ctx.DOMAIN}`);
    } else {
      console.log(`\n  (no YSJ registry row for domain "${ctx.DOMAIN}" — add to schema-library/super-rick/registry/ysj-mirror.registry.json)`);
    }
  }

  if (opts.bundle) {
    const readme = substitute(
      `# ${ctx.TITLE} understandings

Canonical hub: \`${ctx.REPO_HUB}\` · Domain: **${ctx.DOMAIN}**

| File | Role |
|------|------|
| \`Super-Rick-${ctx.DOMAIN_TITLE}-Why-Guide.md\` | WHY table |
| \`Super-Rick-${ctx.DOMAIN_TITLE}-Stack-Ledger.md\` | Scorecard |
| \`PRIVATE ${ctx.DOMAIN_UPPER}-FIRST AI SYSTEM — COMP.md\` | North star |
| \`PRIVATE ${ctx.DOMAIN_UPPER}-FIRST AI SYSTEM — GAP ANALYSIS.md\` | Shipped vs COMP |
| \`PRIVATE ${ctx.DOMAIN_UPPER}-FIRST AI SYSTEM — BRIDGE PLAN.md\` | Phased bridge |
| \`${ctx.DOMAIN_UPPER}-STACK-REPO-INVENTORY.md\` | Repo map |

Doctrine: \`intent-quality-super-rick/schema-library/super-rick/doctrine.md\`
`,
      ctx,
    );
    const readmePath = path.join(outBase, 'README.md');
    if (!fs.existsSync(readmePath) || opts.force) {
      fs.writeFileSync(readmePath, readme, 'utf8');
      console.log(`  wrote ${readmePath}`);
    }
  }
}

main();