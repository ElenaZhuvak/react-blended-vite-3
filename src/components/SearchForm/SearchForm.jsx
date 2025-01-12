import styles from './SearchForm.module.css'
import { FiSearch } from 'react-icons/fi';
import {useSearchParams} from 'react-router-dom';

const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

const SearchForm = () => {
  const [, setSearchParams] = useSearchParams()

 const handleSubmit = (e) => {
  e.preventDefault()
  const region = e.target.elements.region.value;
  setSearchParams({reg: region})
 }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <button className={styles.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <select
        aria-label="select"
        className={styles.select}
        name="region"
        required
        defaultValue="default"
      >
        <option disabled value="default">
          Select a region
        </option>
        {regions.map(region =><option key={region.id} value={region.value}>{region.value}</option> )}
        
      </select>
    </form>
  );
};

export default SearchForm;
