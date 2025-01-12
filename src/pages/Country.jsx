import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import GoBackBtn from '../components/GoBackBtn/GoBackBtn';
import { useParams } from 'react-router-dom';
import { fetchCountry } from '../service/countryApi';
import { useState, useEffect } from 'react';
import CountryInfo from '../components/CountryInfo/CountryInfo';
import Loader from '../components/Loader/Loader';

const Country = () => {
  const { countryId } = useParams();
  const [country, setCoutry] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const asyncWrapper = async () => {
      setLoading(true);
      try {
        const response = await fetchCountry(countryId);
        setCoutry(response);
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };
    asyncWrapper();
  }, [countryId]);

  return (
    <Section>
      <Container>
        <GoBackBtn />
        {loading && <Loader />}
        {country && <CountryInfo country={country} />}
      </Container>
    </Section>
  );
};

export default Country;
