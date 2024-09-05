<script>
    import projectList from "$lib/projectList.json";
</script>

<div
    class="bg-[url(/landscape8.jpg)] w-screen bg-fixed bg-cover bg-no-repeat flex flex-col items-center px-4 py-8 gap-8 text-white"
>
    <h2 class="font-semibold font-sans text-3xl bg-slate-800/70 rounded-xl px-8 py-2">Projects</h2>
    <div class="flex flex-wrap gap-16 justify-center">
        {#each projectList as project}
            <div class="bg-slate-800/70 backdrop-blur-sm rounded-md flex flex-col items-center w-96 text-center">
                <img
                    class="w-80 aspect-video object-cover pt-4 pb-2"
                    src={project.screenshots[0]}
                    alt={project.screenshotsAlt[0]}
                />
                <h3 class="text-2xl pb-1 font-medium">{project.title}</h3>
                <div class="flex gap-2">
                    {#each project.skills as skill}
                        <svg class="h-6 w-6 mb-2"><use href={`/icons.svg#${skill.toLowerCase()}`}></use></svg>
                    {/each}
                </div>
                <p class="mb-4 px-4">{project.summary}</p>
                <div class="flex gap-4 justify-center flex-wrap">
                    {#if project.github}
                        <a
                            href={project.github}
                            target="_blank"
                            class="px-5 py-2 mb-4 flex items-center text-lg bg-gray-800 hover:bg-gray-900 rounded-full"
                        >
                            <svg class="h-6 w-6 mr-3"><use href="/icons.svg#github"></use></svg>
                            <span class="mr-1">GitHub</span>
                            <svg class="h-4 w-4"><use href="/icons.svg#newtab"></use></svg>
                        </a>
                    {/if}
                    {#if project.live}
                        <a
                            href={project.live}
                            target="_blank"
                            class="px-5 py-2 mb-4 flex items-center text-lg bg-sky-800 hover:bg-sky-900 rounded-full"
                        >
                            <span class="mr-1">Visit Site</span>
                            <svg class="h-4 w-4"><use href="/icons.svg#newtab"></use></svg>
                        </a>
                    {/if}
                </div>
            </div>
        {/each}
    </div>
</div>
