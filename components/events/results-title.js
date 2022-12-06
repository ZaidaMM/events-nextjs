import classes from './results-title.module.css';
import Button from '../ui/button';

const ResultsTitle = (props) => {
  const { date } = props;

  const readableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.title}>
      <h1>Events in {readableDate}</h1>
      <Button link='/events'>Show all Events</Button>
    </section>
  );
};
export default ResultsTitle;
