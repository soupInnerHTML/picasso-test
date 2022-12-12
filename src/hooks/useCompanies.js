import {useCallback, useEffect, useState} from "react";
import debounce from 'lodash.debounce'

export default function () {
  const [query, setQuery] = useState('');
  const [companies, setCompanies] = useState([])

  function selectCompany(name) {
    setQuery(name)

    //close dropdown on company select
    setCompanies([])
    setTimeout(() => {
      updateCompanies.cancel()
    }, 50)
  }

  const updateCompanies = useCallback(debounce(fetchCompanies, 400), [])
  function fetchCompanies(query) {
    (async () => {
      if (query) {
        const res = await fetch('https://autocomplete.clearbit.com/v1/companies/suggest?query=' + query)
        const json = await res.json()
        setCompanies(json);
      } else {
        setCompanies([])
      }
    })()
  }
  useEffect(() => {
      updateCompanies(query)
  }, [query])

  return {
    input: {
      value: query,
      onChange: e => setQuery(e.target.value)
    },
    selectCompany,
    companies
  }
}
