import { useRouter } from 'next/router';

const EventDetailPage = () => {
  const router = useRouter();
  console.log(router.route);
  console.log(router.query);

  return (
    <div>
      <h1>Event Page</h1>
    </div>
  );
};
export default EventDetailPage;
