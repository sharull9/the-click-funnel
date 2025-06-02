import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../Reusable/Carousel";
import { Card, CardContent } from "../Reusable/Card";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "../lib/utils";

const portfolioItems = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: `Portfolio Item ${i + 1}`,
  image: `/portfolio/image-${i + 1}.jpg`,
}));

export default function Portfolio() {
  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div
      id="portfolio"
      className="relative w-full overflow-hidden bg-white rounded-t-4xl py-6 sm:py-10 px-6 sm:px-10"
    >
      <div className="text-center mb-4 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">
          Portfolio
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Take a look at some of our past projects to discover how our creative
          agency works and what we can do for you.
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {portfolioItems.map((item) => (
            <CarouselItem
              key={item.id}
              className={cn("pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3", {})}
            >
              <Card className="border-0 shadow-none bg-transparent group cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-125"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="mt-4 flex items-center justify-center gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "h-3.5 w-3.5 rounded-full cursor-pointer border-gray-400 border-2",
              {
                "border-black": current === index + 1,
              }
            )}
          />
        ))}
      </div>
    </div>
  );
}
