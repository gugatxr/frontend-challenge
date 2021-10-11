import WelcomeMessage from "components/WelcomeMessage";

import CurrentlyReading from "containers/CurrentlyReading";
import DiscoverNewBook from "containers/DiscoverNewBook";
import ReviewsOfTheDay from "containers/ReviewsOfTheDay";

export default function Home() {
  return (
    <>
      <WelcomeMessage name="Mehmed Al Fatih" />
      <DiscoverNewBook />
      <CurrentlyReading />
      <ReviewsOfTheDay />
    </>
  );
}
