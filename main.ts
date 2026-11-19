/**
 * entry.png - one sheet of newsprint holding one day of world news.
 *
 * The artifact this repository publishes is a single 1024x1024 image drawn
 * as a cream newsprint broadsheet, the front page of a paper dated
 * Thursday 19 November 2026. At the top, the masthead's nameplate is
 * paired with a red date tab stamping the edition. Under it runs a
 * day-in-numbers strip that boils the morning down to its headline
 * figures: the International Court of Justice voting 9-6 on genocide in
 * Myanmar, Anthropic pricing its IPO at $81bn, an M5.7 earthquake striking
 * Kumamoto, and UK inflation printing at 3.6%. Three hero cards lead the
 * page with the day's biggest stories - the three-way summit convened in
 * Shenzhen, the ICJ's Myanmar ruling, and Anthropic's debut on the Nasdaq.
 * The page then narrows through five secondary cards and seven tertiary
 * cards, each a shorter take on a smaller story, until a closing band
 * gathers twenty-four evening briefs, every one tagged with its region.
 * A date-check footer ends the sheet, separating what genuinely happened
 * on the 19th from anything carried over from Wednesday.
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
