/**
 * Writes a single deadpan weather forecast line to `entry.txt` in the output
 * directory (`$MAKEFUN_OUTPUT_DIR`, defaulting to `/output`).
 *
 * Forecast text written:
 * Grimsby-on-Ash, pop. 412: dew point projected to exceed local body temp by morning; forecast 100% humidity or sudden personal raincoat commerce.
 */
import { join } from 'node:path';
import { writeFileSync, mkdirSync } from 'node:fs';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), "Grimsby-on-Ash, pop. 412: dew point projected to exceed local body temp by morning; forecast 100% humidity or sudden personal raincoat commerce.");
