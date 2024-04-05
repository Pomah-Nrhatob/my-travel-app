import { v4 as uuidv4 } from 'uuid'

export const createCountryWithId = (country) => {
  const countryId = country.map((el) => {
    return { ...el, id: uuidv4() }
  })
  return countryId
}
