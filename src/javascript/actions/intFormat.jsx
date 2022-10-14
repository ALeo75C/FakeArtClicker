import { unit_names } from '../data/unitNames.jsx'

export const intFormat = (v) => {
  let fin = ''

  if (v > 10000) {
    const total_digits = 3
    const base = Math.log10(v)
    const unit_power = Math.floor(base / 3)
    const cur_unit = unit_names[unit_power]
      ? unit_names[unit_power]
      : unit_names[11]

    const rem = v / 10 ** (unit_power * 3)

    const dec_digits = Math.min(total_digits, Math.ceil(Math.log10(rem) + 1e-4))
    const prec_digits = total_digits - dec_digits

    fin =
      new Intl.NumberFormat('en', {
        style: 'decimal',
        maximumFractionDigits: prec_digits
      }).format(rem) + cur_unit
  } else if (v < 10000) {
    fin = new Intl.NumberFormat('en', {
      style: 'decimal',
      maximumFractionDigits: 2
    }).format(v)
  } else {
    fin = new Intl.NumberFormat('en', {
      style: 'decimal',
      maximumFractionDigits: 0
    }).format(v)
  }

  return fin
}
