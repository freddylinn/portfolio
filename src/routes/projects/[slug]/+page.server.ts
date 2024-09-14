import projectList from "$lib/projectList.json";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
    const project = projectList.find((project) => project.page === params.slug);
    if (!project) throw error(404, "Page Not Found");
    return { project };
}
