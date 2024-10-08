<script lang="ts">
    import { fly } from "svelte/transition";

    type TabContentType = {
        [key: string]: string[];
    };

    const tabTitles = ["Languages", "Frameworks", "Security", "Databases", "Cloud", "Dev Tools"];
    let selectedTab: keyof TabContentType = tabTitles[0];

    // Each tab contains an object made up of technology mapped to its icon name
    const tabContent: TabContentType = {
        Languages: ["Javascript", "Typescript", "SQL", "Python", "HTML", "CSS", "C++", "C", "Java", "Scala"],
        Frameworks: ["React", "Firebase", "Tailwind", "Jest", "SvelteKit", "Express"],
        Security: ["Linux", "Wireshark", "Burp Suite", "Bash Shell", "Nmap"],
        Databases: ["SQLite", "Postgres", "MySQL", "MongoDB"],
        Cloud: ["Google Cloud", "AWS", "Microsoft Azure"],
        "Dev Tools": ["Git", "GitHub", "Docker", "Adobe XD", "Figma", "CircleCI", "Jira"],
    };
</script>

<section class="bg-zinc-800 text-white">
    <h2 class="text-3xl lg:text-4xl font-semibold font-sans text-center pt-8 pb-6">Technical Skills</h2>
    <div class="flex justify-center gap-2 flex-wrap px-4">
        {#each tabTitles as title}
            <button
                on:click={() => (selectedTab = title)}
                class="border rounded-full px-5 py-2 font-medium text-lg lg:text-xl {selectedTab === title
                    ? 'bg-white text-black'
                    : ''}"
            >
                {title}
            </button>
        {/each}
    </div>
    {#key selectedTab}
        <div in:fly={{ y: 20, duration: 400 }} class="flex justify-center items-center gap-16 lg:gap-24 flex-wrap px-8 py-12">
            {#each tabContent[selectedTab] as tool}
                <div class="flex flex-col items-center justify-center">
                    {#if selectedTab === "Security"}
                        <img
                            class="h-24 w-24 md:w-32 md:h-32 mb-2 lg:mb-4"
                            src={`/securityIcons/${tool.toLowerCase().replace(/\s+/g, "")}.svg`}
                            alt=""
                            aria-hidden="true"
                        />
                    {:else}
                        <svg class="h-24 w-24 md:w-32 md:h-32 mb-2 lg:mb-4"
                            ><use href={`/icons.svg#${tool.toLowerCase()}`} aria-hidden="true"></use></svg
                        >
                    {/if}
                    <h3 class="font-sans text-xl lg:text-2xl">{tool}</h3>
                </div>
            {/each}
        </div>
    {/key}
</section>
