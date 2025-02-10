import { component$, useSignal, $, useTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  const showPage = useSignal(true);
  const nav = useNavigate();

  const closePage = $(() => {
    const blogElement = document.getElementById("blog");
    if (blogElement) {
      blogElement.style.transition = "opacity 0.3s ease-out";
      blogElement.style.opacity = "0";
      setTimeout(() => {
        nav("/");
      }, 500);
    }
  });

  useTask$(() => {
    const blogElement = document.getElementById("blog");
    if (blogElement) {
      blogElement.style.opacity = "1";
    }
  });

  return (
    <>
      {showPage.value && (
        <div
          id="blog"
          class="w-full h-screen  flex justify-center items-center absolute  backdrop-blur-md"
        >
          <div class="max-w-3xl page w-full shadow-2xl rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
            {/* macOS Style Title Bar */}
            <div class="w-full bg-gray-300 dark:bg-gray-700 flex items-center p-2 relative">
              <div class="flex space-x-2 pl-3">
                <span class="w-3 h-3 bg-red-500 rounded-full cursor-pointer" onClick$={closePage}></span>
                <span class="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span class="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>
              <span class="absolute left-1/2 transform -translate-x-1/2 text-sm text-gray-700 dark:text-gray-300">
                Blog | New Website
              </span>
            </div>
            {/* Content */}
            <div class="p-6 text-gray-900 dark:text-gray-100">
              <h1 class="text-2xl font-bold mb-4">Welcome to the new site!</h1>
              <p class="text-lg">This is the new website created in Qwik.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export const head: DocumentHead = {
  title: "Bjorn Heuten | Blog",
  meta: [
    {
      name: "New Website",
      content: "New Website",
    },
  ],
};