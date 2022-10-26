const DATE_UNITS = [
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1]
]

export const getDateDiff = (timestamp) => {
  const now = Date.now()
  const elapsed = (now - timestamp) / 1000
  for (const [unit, secondsInUnit] of DATE_UNITS) {
    if (Math.abs(elapsed) > secondsInUnit || unit === 'second') {
      const value = Math.floor(elapsed / secondsInUnit)
      return { value, unit }
    }
  }
}
