<script>
    import { page } from "$app/stores";
</script>

<div class="flex flex-col items-center justify-center h-screen gap-8 text-white bg-gray-700">
    <h1 class="text-3xl font-bold font-sans">
        {$page.status}
        {$page.error?.message || "An unknown error occurred"}
    </h1>
    <img class="w-96 h-auto" src={`https://http.cat/${$page.status}`} alt="error message explained with cat" />
    <a href="/" class="px-5 py-2 mb-4 flex items-center text-lg text-gray-800 bg-white hover:bg-neutral-200 rounded-full">
        <span class="mr-1 lg:text-xl">Return to Homepage</span>
    </a>
</div>
