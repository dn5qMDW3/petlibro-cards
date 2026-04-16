/**
 * Side-effect barrel: importing this module guarantees every primitive's
 * @customElement registration runs. Top-level <petlibro-cards> imports this
 * once; individual cards don't need per-primitive imports.
 *
 * Also re-exports types consumers might want (PetColor, etc.).
 */
import './shape-icon';
import './chip';
import './card-header';
import './tile';
import './entity-row';
import './pill-button';
import './stepper';

export type { PetColor, PetShapeSize } from './shape-icon';
export type { PetChipVariant } from './chip';
export type { PetGaugeVariant } from './tile';
export type { PetPillVariant } from './pill-button';
