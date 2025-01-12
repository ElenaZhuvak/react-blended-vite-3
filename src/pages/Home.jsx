import { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import { getCountries } from '../service/countryApi';
import CountryList from '../components/CountryList/CountryList';
import Loader from '../components/Loader/Loader';

const Home = () => {
  const [countries, setCountries] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const asyncWrapper = async () => {
      setLoading(true);
      try {
        const response = await getCountries();
        setCountries(response);
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };
    asyncWrapper();
  }, []);
  return (
    <Section>
      <Container>
        <Heading title="Home" bottom />
        {countries && <CountryList countries={countries} />}
        {loading && <Loader />}
      </Container>
    </Section>
  );
};
export default Home;
