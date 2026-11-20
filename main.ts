/**
 * entry.png presents THE DAY IN WORLD NEWS as a single-page broadsheet.
 * It is a cream newsprint edition prepared for Thursday 19 November 2026.
 * The restrained paper tone gives the page the feel of a printed daily,
 * while the masthead and date make the edition immediately identifiable.
 * Forty stories share the sheet, arranged so major headlines and brief items
 * can be read together without losing the sense of one day's coverage.
 * A compact stat band turns key figures from the news into a quick visual
 * summary before the reader moves into the story blocks.
 * The page also includes a region tally, making the geographic spread of the
 * reporting visible alongside the headlines themselves.
 * News is grouped into a clear hierarchy of lead coverage and shorter briefs,
 * preserving the density expected from a broadsheet while keeping the cream
 * page open and legible.
 * At the bottom, a date-check footer confirms the stories belong to the
 * Thursday edition and helps distinguish them from items carried over from
 * another day.
 */
import { copyFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = dirname(fileURLToPath(import.meta.url));
const source = join(repo, 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const target = join(outputDir, 'entry.png');
mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
console.log('entry.png copied to', target);
