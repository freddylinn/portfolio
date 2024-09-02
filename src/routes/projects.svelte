<script>
    import projectList from "$lib/projectList.json";
</script>

<div
    class="bg-[url(/landscape8.jpg)] w-screen bg-cover bg-no-repeat flex flex-wrap justify-center items-center px-4 py-12 gap-4 text-white"
>
    <h2 class="font-semibold font-sans text-3xl bg-slate-800/70 rounded-xl px-8 py-2">Projects</h2>
    {#each projectList as project}
        <div class="bg-slate-800/70 backdrop-blur-sm rounded-md">
            <h3>{project.title}</h3>
            <div class="flex gap-3">
                {#each project.skills as skill}
                    <svg class="h-8 w-8 mb-2"><use href={`/icons.svg#${skill.toLowerCase()}`}></use></svg>
                {/each}
            </div>
            <p>{project.summary}</p>
        </div>
    {/each}
</div>
