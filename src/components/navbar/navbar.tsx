import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
export default component$(() => {
    return (
        <>
            <div id="homescreen" class="flex justify-center items-center">
                <div class=" bg-gray-800/40 fixed top-0 w-fit gap-12 px-12 m-2 rounded-4xl text-white p-4 flex justify-between items-center">
                    <Link href="/" class="text-white">Home</Link>
                    <Link href="/about/" class="text-white">About</Link>
                    <Link href='/blog/' class="text-white">Blog</Link>
                    <Link href='/projects/' class="text-white">Projects</Link>
                </div>
            </div>
        </>
    );
});