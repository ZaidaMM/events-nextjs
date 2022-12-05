import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../dummy-data';

const Homepage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <ul>
        <EventList items={featuredEvents} />
      </ul>
    </div>
  );
};
export default Homepage;
