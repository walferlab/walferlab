import { useEffect, useState } from "react";
import ClickSpark from "../../components/ClickSpark";
import Navbar from "../../components/navbar/page";
import Footer from "../../components/footer/page";
//import { supabase } from "../../lib/supabaseClient";

const PAGE_SIZE = 6;
const CATEGORIES = ["all", "saas", "web", "mobile", "tools", "github"];

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export default function Projects() {
  const [supabaseProjects, setSupabaseProjects] = useState([]);
  const [githubProjects, setGithubProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  /* ---------------- GitHub ---------------- */
  useEffect(() => {
    fetchGithubProjects();
  }, []);

  async function fetchGithubProjects() {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
        },
      }
    );

    const data = await res.json();

    setGithubProjects(
      data.map((repo) => ({
        id: repo.id,
        title: repo.name,
        image_url: `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}`,
        project_url: repo.html_url,
        category: "github",
      }))
    );
  }

  /* ---------------- Supabase ---------------- */
  useEffect(() => {
    resetAndFetch();
  }, [activeCategory]);

  async function resetAndFetch() {
    setSupabaseProjects([]);
    setPage(1);
    setHasMore(true);
    await fetchSupabaseProjects(1, true);
  }

  async function fetchSupabaseProjects(currentPage, reset = false) {
    if (loading) return;
    setLoading(true);

    const from = (currentPage - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    let query = supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false })
      .range(from, to);

    if (activeCategory !== "all" && activeCategory !== "github") {
      query = query.eq("category", activeCategory);
    }

    const { data } = await query;

    if (data) {
      if (data.length < PAGE_SIZE) setHasMore(false);
      setSupabaseProjects((prev) =>
        reset ? data : [...prev, ...data]
      );
    }

    setLoading(false);
  }

  function loadMore() {
    const next = page + 1;
    setPage(next);
    fetchSupabaseProjects(next);
  }

  /* ---------------- Merge (UI SAME) ---------------- */
  const projects =
    activeCategory === "github"
      ? githubProjects
      : activeCategory === "all"
      ? [...supabaseProjects, ...githubProjects]
      : supabaseProjects;

  return (
    <>
      <Navbar />

      <ClickSpark>
        <main className="py-24 px-4 sm:px-8">
          <div className="mx-auto max-w-7xl">

            {/* TITLE */}
            <h1 className="text-center text-5xl sm:text-6xl font-display font-bold text-gray-800">
              Projects
            </h1>

            {/* FILTER */}
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition
                    ${
                      activeCategory === cat
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>

            {/* PROJECT CONTAINER — SAME AS BEFORE */}
            <section className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <a
                  key={project.id}
                  href={project.project_url}
                  target="_blank"
                  className="group rounded-2xl overflow-hidden border border-gray-200 bg-white hover:shadow-xl transition"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image_url}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                  </div>

                  <div className="p-5">
                    <p className="text-lg font-semibold text-gray-800">
                      {project.title}
                    </p>
                    <span className="text-xs uppercase text-gray-500">
                      {project.category}
                    </span>
                  </div>
                </a>
              ))}
            </section>

            {/* LOAD MORE */}
            {hasMore &&
              activeCategory !== "github" &&
              supabaseProjects.length > 0 && (
                <div className="mt-16 flex justify-center">
                  <button
                    onClick={loadMore}
                    disabled={loading}
                    className="rounded-full bg-black px-8 py-3 text-sm font-medium text-white hover:bg-gray-800 disabled:opacity-50 transition"
                  >
                    {loading ? "Loading..." : "Load More"}
                  </button>
                </div>
              )}
          </div>
        </main>
      </ClickSpark>

      <Footer />
    </>
  );
}
