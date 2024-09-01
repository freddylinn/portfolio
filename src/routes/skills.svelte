<script lang="ts">
    import { fade } from "svelte/transition";

    type TabContentType = {
        [key: string]: string[];
    };

    const tabTitles = ["Languages", "Frameworks", "Security", "Databases", "Cloud", "Dev Tools"];
    let selectedTab: keyof TabContentType = tabTitles[0];

    // Each tab contains an object made up of technology mapped to its icon name
    const tabContent: TabContentType = {
        Languages: ["Javascript", "Typescript", "SQL", "Python", "HTML", "CSS", "C++", "C", "Java", "Scala"],
        Frameworks: ["React", "Firebase", "TailwindCSS", "Jest", "SvelteKit", "Express"],
        Security: ["Linux", "Wireshark", "Burp Suite", "Bash Shell"],
        Databases: ["SQLite", "Postgres", "MySQL", "MongoDB"],
        Cloud: ["Google Cloud", "AWS", "Microsoft Azure"],
        "Dev Tools": ["Git", "GitHub", "Docker", "Adobe XD", "Figma", "CircleCI", "Jira"],
    };
</script>

<section class="bg-zinc-800 text-white">
    <h2 class="text-3xl font-semibold font-sans text-center pt-8 pb-6">Technical Skills</h2>
    <div class="flex justify-center gap-2 flex-wrap px-8">
        {#each tabTitles as title}
            <button
                on:click={() => (selectedTab = title)}
                class="border rounded-full px-5 py-2 font-medium text-lg {selectedTab === title ? 'bg-white text-black' : ''}"
            >
                {title}
            </button>
        {/each}
    </div>
    <div class="flex justify-center items-center gap-16 flex-wrap p-8">
        {#each tabContent[selectedTab] as tool}
            <div class="flex flex-col items-center justify-center">
                <svg class="h-24 w-24 mb-2"><use href={`/icons.svg#${tool.toLowerCase()}`}></use></svg>
                <h3 class="font-medium font-sans text-xl">{tool}</h3>
            </div>
        {/each}
    </div>
</section>
