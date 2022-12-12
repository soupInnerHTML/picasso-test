
const CompaniesDropdown = ({companies, selectCompany}) => {
  return (
    <div className={'companies'}>
      {companies.map((company) => (
        <div
          className={'company'}
          onClick={() => selectCompany(company.name)}
          key={company.name + company.logo + company.domain}
        >
          <img className={'company__logo'} src={company.logo} alt=""/>
          <div>
            <p className={'company__name'}>{company.name}</p>
            <p className={'company__domain'}>{company.domain}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default CompaniesDropdown;
