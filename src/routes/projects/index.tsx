import { component$, useSignal, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
    const blogs = [
        {
            title: 'Hostvio',
            description: 'My work at Hostvio',
            slug: 'hostvio'
        }
    ];

    const showPage = useSignal(true);
    const nav = useNavigate();

    const closePage = $(() => {
      showPage.value = false;
      setTimeout(() => {
        nav("/");
      }, 300);
    });

    return (
      <>
        {showPage.value && (
          <div id="popup" style={{ opacity: "1", transition: "opacity 0.3s" }} class="w-full h-screen absolute flex justify-center items-center backdrop-blur-md">
            <div class="max-w-7xl page w-full shadow-2xl rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
              {/* macOS Style Title Bar */}
              <div class="w-full bg-gray-300 dark:bg-gray-700 flex items-center p-2 relative">
                <div class="flex space-x-2 pl-3">
                  <span class="w-3 h-3 bg-red-500 rounded-full cursor-pointer" onClick$={closePage}></span>
                  <span class="w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <span class="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
                <span class="absolute left-1/2 transform -translate-x-1/2 text-sm text-gray-700 dark:text-gray-300">
                  Blogs
                </span>
              </div>
              {/* Content */}
              <div class="p-6 text-gray-900 dark:text-gray-100">
                <h1 class="text-2xl font-bold mb-4">Blogs</h1>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {blogs.map(blog => (
                    <div key={blog.slug} class="bg-gray-800 p-4 rounded-lg shadow-lg">
                      <h2 class="text-lg font-semibold">{blog.title}</h2>
                      <p class="text-sm">{blog.description}</p>
                      <a key={blog.slug} href={`/projects/${blog.slug}`} class="block mt-2 text-white p-2 rounded-lg bg-black text-center hover:bg-gray-700 transition">
                        Open project
                      </a>
                    </div>
                  ))}
                </div>
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
      name: "Blog",
      content: "Blog",
    },
  ],
};