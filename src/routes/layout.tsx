import { Slot } from "@builder.io/qwik";
import { component$, useSignal, useStyles$ } from "@builder.io/qwik";

import type { RequestHandler } from "@builder.io/qwik-city";
import { Carousel } from '@qwik-ui/headless';
import { Link } from "@builder.io/qwik-city";
import { LuGithub, LuNewspaper, LuLinkedin, LuFolderOpen } from "@qwikest/icons/lucide";
export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
    useStyles$(`
      .carousel-circle[data-active] {
          background-color: white;
      }
      #homescreen {
        animation-name: fadein;
        animation-duration: 2s;
      }
      .page {
        animation-name: fadein;
        animation-duration: 1s;
      }
      @keyframes fadein {
        from {opacity: 0; scale: 0.1}
        to {opacity: 100; scale: 1}
      }
          `);
      const isPlaying = useSignal<boolean>(false);
  return (
    <div id="homescreen" class='w-full flex justify-center'>
              <div class=" mt-44 max-w-7xl grid grid-cols-4 gap-12 w-full">
          <div class=" bg-gray-800/40 shadow-md col-span-2 min-h-24 rounded-4xl text-white p-4 pl-8 flex justify-between items-center">
            <Carousel.Root class='carousel flex flex-row' autoPlayIntervalMs={100} bind:autoplay={isPlaying} gap={30} orientation="vertical"  rewind={true} >
              <Carousel.Scroller class="carousel-scroller">
                <Carousel.Slide class="carousel-slide">
                  <h1 class='text-6xl font-bold leading-snug'>Bjorn <br />Heuten</h1>
                </Carousel.Slide>
                <Carousel.Slide class="carousel-slide">
                  <h1 class='text-4xl font-bold leading-snug'>18 Years old</h1>
                  Year 3 Software Development Student
                </Carousel.Slide>
              </Carousel.Scroller>
              <Carousel.Pagination class="flex justify-center flex-col gap-2"
              >
                <Carousel.Bullet class='w-2 h-2 carousel-circle bg-gray-500 rounded-xl mx-2' />
                <Carousel.Bullet class='w-2 h-2 carousel-circle bg-gray-500 rounded-xl mx-2' />
              </Carousel.Pagination>
            </Carousel.Root>
          </div>
          <div class='bg-gray-800/40 shadow-md min-h-24 col-span-1 rounded-4xl text-white p-4 pl-8 flex flex-col items-center'>
              <h2 class='text-2xl font-bold mb-4 flex flex-row gap-2 justify-center items-center'><LuNewspaper/> Updates</h2>
              <div class='flex flex-col gap-2 w-full p-2 rounded-lg  divide-gray-200'>
                <Link href='/blog/new-website' class='text-white p-2 rounded-lg bg-gray-800'>new Website!</Link>
              </div>
          </div>
          <div class='bg-gray-800/40 shadow-md min-h-24 col-span-1 rounded-4xl text-white p-4 pl-8 flex flex-col items-center'>
              <h2 class='text-2xl font-bold mb-4 flex flex-row gap-2 justify-center items-center'><LuFolderOpen/> Projects</h2>
              <div class='flex flex-col gap-2 w-full p-2 rounded-lg  divide-gray-200'>
                <Link href='/projects/hostvio' class='text-white p-2 rounded-lg bg-gray-800'>Hostvio</Link>
              </div>
          </div>
          <Link href="https://github.com/XyKazi" target="_blank" class=' text-white gap-2 flex flex-col items-center'>
            <LuGithub class='bg-gray-800 rounded-4xl p-2 text-9xl'/>
            Github
          </Link>
          <Link href="https://www.linkedin.com/in/bjorn-heuten-ba41ba296/" target="_blank" class=' text-white gap-2 flex flex-col items-center'>
            <LuLinkedin class=' bg-blue-500 rounded-4xl p-2 text-9xl'/>
            Linkedin
          </Link>
        </div>
  <Slot />
  </div>
  ) 

;
});
