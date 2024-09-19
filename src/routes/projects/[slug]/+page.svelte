<script lang="ts">
    import Projects from "../../projects.svelte";

    export let data;
    const description = data.project.description!.split("\n");
</script>

<div class="bg-gray-800 text-white flex flex-col items-center">
    <h1 class="text-4xl lg:text-5xl font-mono font-medium text-center p-8">{data.project.title}</h1>
    <a href="/#projects" class="px-8 py-3 mb-8 text-lg text-gray-800 bg-white hover:bg-neutral-200 rounded-full">
        <span class="text-lg font-medium lg:text-xl">Return to Homepage</span>
    </a>
    <section class="mb-8">
        <h2 class="text-3xl mb-4 text-center font-medium font-sans">Description</h2>
        {#each description as paragraph}
            <p class="font-sans mb-4 text-lg leading-relaxed w-11/12 mx-auto md:w-1/2">{paragraph}</p>
        {/each}
    </section>
    <section>
        <h2 class="text-3xl mb-8 text-center font-medium font-sans">Gallery</h2>
        <div class="flex flex-wrap gap-16 justify-center mb-16">
            {#each Array(data.project.screenshots.length) as _, i}
                <img
                    class="max-w-xs md:max-w-md lg:max-w-xl h-auto object-contain"
                    src={data.project.screenshots[i]}
                    alt={data.project.screenshotsAlt[i]}
                />
            {/each}
        </div>
    </section>
    <button class="text-xl underline mb-32" on:click={() => document.body.scrollIntoView()}>Back to Top</button>
</div>
