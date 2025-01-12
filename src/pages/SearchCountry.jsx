import { useSearchParams } from 'react-router-dom';
import Container from '../components/Container/Container';
import SearchForm from '../components/SearchForm/SearchForm';
import Section from '../components/Section/Section';
import { useEffect, useState } from 'react';
import { fetchByRegion } from '../service/countryApi';
import CountryList from '../components/CountryList/CountryList';
import Loader from '../components/Loader/Loader';

const SearchCountry = () => {
  const [searchParams] = useSearchParams()
  const region = searchParams.get('reg')
  console.log(region)
  const [countries, setCountries] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!region) {
      return
    }
    const asyncWrapper = async () => {
      setLoading(true);
      try {
        const response = await fetchByRegion(region);
        setCountries(response);
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };
    asyncWrapper();
  }, [region]);

  return (
    <Section>
      <Container>
        <SearchForm />
        {countries && <CountryList countries={countries} />}
        {loading && <Loader />}
      </Container>
    </Section>
  );
};

export default SearchCountry;
