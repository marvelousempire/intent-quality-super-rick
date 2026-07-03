#!/usr/bin/env node
/**
 * Audit Super Rick hub ↔ yousirjuan setup chapter mirror pointers.
 * Registry: schema-library/super-rick/registry/ysj-mirror.registry.json
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SCHEMA_ROOT = path.resolve(__dirname, '..');
const IQSR_ROOT = path.resolve(SCHEMA_ROOT, '../..');
const REGISTRY_PATH = path.join(SCHEMA_ROOT, 'registry/ysj-mirror.registry.json');

const DEFAULT_DEV_ROOT = path.dirname(IQSR_ROOT);

function parseArgs(argv) {
  const opts = { ysjRoot: path.join(DEFAULT_DEV_ROOT, 'yousirjuan'), hubRoot: null };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--domain') opts.domain = argv[++i];
    else if (a === '--ysj-root') opts.ysjRoot = argv[++i];
    else if (a === '--hub-root') opts.hubRoot = argv[++i];
    else if (a === '--help' || a === '-h') opts.help = true;
  }
  return opts;
}

function usage() {
  console.log(`Audit Super Rick YSJ mirror pointers

Usage:
  node scripts/audit-super-rick-ysj-mirror.mjs --domain voice
  node scripts/audit-super-rick-ysj-mirror.mjs --domain voice --ysj-root ~/Developer/yousirjuan

Checks:
  - Registry row exists for domain
  - YSJ setup chapter file exists
  - YSJ chapter cites hub FULL-STACK-UNDRESSING path
  - Hub undressing file exists (if --hub-root or ~/Developer/<repo_hub>)
`);
}

function loadRegistry() {
  if (!fs.existsSync(REGISTRY_PATH)) {
    console.error(`✗ missing registry: ${REGISTRY_PATH}`);
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf8'));
}

function main() {
  const opts = parseArgs(process.argv);
  if (opts.help) {
    usage();
    process.exit(0);
  }
  if (!opts.domain) {
    console.error('Provide --domain (e.g. voice)');
    process.exit(1);
  }

  const registry = loadRegistry();
  const row = registry.domains?.[opts.domain];
  if (!row) {
    console.error(`✗ no registry row for domain: ${opts.domain}`);
    process.exit(1);
  }

  const failures = [];
  const ysjChapter = path.join(opts.ysjRoot, row.setup_chapter);
  const hubRoot = opts.hubRoot || path.join(DEFAULT_DEV_ROOT, row.repo_hub);
  const hubUndressing = path.join(hubRoot, row.hub_undressing);

  if (!fs.existsSync(ysjChapter)) {
    failures.push(`YSJ chapter missing: ${ysjChapter}`);
  } else {
    const body = fs.readFileSync(ysjChapter, 'utf8');
    const hubNeedle = row.hub_undressing.replace(/^understandings\//, '');
    if (!body.includes(hubNeedle) && !body.includes(row.repo_hub)) {
      failures.push(`YSJ chapter does not cite hub mirror (${row.repo_hub} / ${hubNeedle})`);
    }
    console.log(`✓ YSJ chapter: ${ysjChapter}`);
  }

  if (!fs.existsSync(hubUndressing)) {
    failures.push(`Hub undressing missing: ${hubUndressing}`);
  } else {
    console.log(`✓ Hub undressing: ${hubUndressing}`);
  }

  const ysjSkill = path.join(opts.ysjRoot, row.ai_skill);
  if (!fs.existsSync(ysjSkill)) {
    failures.push(`YSJ ai-skill missing: ${ysjSkill}`);
  } else {
    const skill = fs.readFileSync(ysjSkill, 'utf8');
    if (skill.includes('voice-stack') && !skill.includes('standard-voice-stack')) {
      failures.push(`YSJ ai-skill still references legacy voice-stack name`);
    } else {
      console.log(`✓ YSJ ai-skill: ${ysjSkill}`);
    }
  }

  if (failures.length) {
    console.error('\n✗ Super Rick YSJ mirror audit failed:');
    for (const f of failures) console.error(`  - ${f}`);
    process.exit(1);
  }

  console.log(`\n✓ Super Rick YSJ mirror OK for domain "${opts.domain}"`);
}

main();