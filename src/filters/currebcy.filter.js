export default function currencyFilter(val, currency = 'RUB') {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency
  }).format(val)
}
