import { useRouter } from 'next/router';

const FilteredEventsPage = () => {
  const router = useRouter();
  console.log(router.route);
  console.log(router.query);
  return (
    <div>
      <h1>Filtered Events</h1>
    </div>
  );
};
export default FilteredEventsPage;
