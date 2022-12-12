import cs from 'classnames'
import useCompanies from "../hooks/useCompanies";
import CompaniesDropdown from "./CompaniesDropdown";

function App() {
  const {input, selectCompany, companies} = useCompanies()
  const isDropdownVisible = companies.length > 0

  return (
    <div className={'container'}>
      <div>
        <p className={'title'}>Компания</p>
        <input
          className={cs({'search-string_empty': !isDropdownVisible}, 'search-string')}
          type="text"
          {...input}
        />
        {isDropdownVisible && <CompaniesDropdown {...{companies, selectCompany}} />}
      </div>
    </div>
  );
}

export default App;
