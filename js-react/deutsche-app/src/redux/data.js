export const MASKULIN = 'maskulin'
export const FEMININ = 'feminin'
export const NEUTRAL = 'neutral'
export const PLURAL = 'plural'

export const NOMINATIV = 'nominativ'
export const AKKUSATIV = 'akkusativ'
export const DATIV = 'dativ'
export const GENITIV = 'genitiv'

export const DER = 'der'
export const DIE = 'die'
export const DAS = 'das'
export const DEN = 'den'
export const DEM = 'dem'
export const DES = 'des'

export const OPTIONS = [
  {
    color: 'blue',
    value: DER,
  },
  {
    color: 'red',
    value: DIE,
  },
  {
    color: 'green',
    value: DAS,
  },
  {
    color: 'purple',
    value: DEN,
  },
  {
    color: 'orange',
    value: DEM,
  },
  {
    color: 'yellow',
    value: DES,
  },
]

export const ANSWERS = [
  // nominativ
  {
    case: NOMINATIV,
    person: MASKULIN,
    article: DER,
  },
  {
    case: NOMINATIV,
    person: FEMININ,
    article: DIE,
  },
  {
    case: NOMINATIV,
    person: NEUTRAL,
    article: DAS,
  },
  {
    case: NOMINATIV,
    person: PLURAL,
    article: DIE,
  },
  // akkusativ
  {
    case: AKKUSATIV,
    person: MASKULIN,
    article: DEN,
  },
  {
    case: AKKUSATIV,
    person: FEMININ,
    article: DIE,
  },
  {
    case: AKKUSATIV,
    person: NEUTRAL,
    article: DAS,
  },
  {
    case: AKKUSATIV,
    person: PLURAL,
    article: DIE,
  },
  // dativ
  {
    case: DATIV,
    person: MASKULIN,
    article: DEM,
  },
  {
    case: DATIV,
    person: FEMININ,
    article: DER,
  },
  {
    case: DATIV,
    person: NEUTRAL,
    article: DEM,
  },
  {
    case: DATIV,
    person: PLURAL,
    article: DEN,
  },
  // genitiv
  {
    case: GENITIV,
    person: MASKULIN,
    article: DES,
  },
  {
    case: GENITIV,
    person: FEMININ,
    article: DER,
  },
  {
    case: GENITIV,
    person: NEUTRAL,
    article: DES,
  },
  {
    case: GENITIV,
    person: PLURAL,
    article: DER,
  },
]
