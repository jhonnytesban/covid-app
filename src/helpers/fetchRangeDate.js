export const fetchRangeDate = async (country, startDate, finalDate) => {
  const res = await fetch(`https://api.covid19tracking.narrativa.com/api/country/${country}?date_from=${startDate}&date_to=${finalDate}`)
  const data = await res.json()
  const { dates } = await data
  const dataArray = await Object.values(dates)
  return dataArray
}