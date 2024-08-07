import CarouselBanner from "@/components/CarouselBanner";
import { getDiscoverMovies, getUpcomingMovies } from "@/lib/getMovies";

type Props = {
  id?: string;
  keywords?: string;
};

async function CarouselBannerWrapper({ id, keywords }: Props) {
  const movies = await getUpcomingMovies();

  return <CarouselBanner movies={movies} />;
}

export default CarouselBannerWrapper;