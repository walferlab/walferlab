import ClickSpark from "../../components/ClickSpark";
import Navbar from "../../components/navbar/page";
import Footer from "../../components/footer/page";
import { Star, GitBranch, Eye, Copy, Github } from 'lucide-react';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProjectDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [repo, setRepo] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(repo.clone_url);
  }


  useEffect(() => {
    if (!id) return;


    fetch(`https://api.github.com/repositories/${id}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRepo(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="p-10">Loading...</p>;
  if (!repo) return <p className="p-10">Project not found</p>;

  return (
    <>
      <Navbar />

      <ClickSpark>
        <div className="py-24 mx-10 flex flex-wrap">
          <div className="max-w-3xl mx-10 rounded-2xl overflow-hidden border border-gray-400">
            <img
              src={`https://opengraph.githubassets.com/1/${repo.owner.login}/${repo.name}`}
              alt={repo.name}
              className="w-full object-cover"
            />
          </div>

          <div className="flex flex-col">
              <p className="text-md text-gray-500 font-medium font-satoshi">{repo.full_name}</p>
              <p className="text-3xl font-bold font-display mb-0 text-gray-800">{repo.name}</p>
              <div className="flex flex-row items-center mb-3">
                <p className="text-md text-gray-600 font-satoshi font-normal">created by </p>
                <img src={repo.owner.avatar_url} alt="" className="rounded-full w-6 h-6 border border-gray-500 ml-2 mr-1" />
                <a href={repo.owner.html_url} className="text-lg text-gray-500 font-satoshi font-normal hover:underline">{repo.owner.login}</a>
              </div>
              <p className="text-md font-normal text-gray-500 font-satoshi">{repo.description}</p>

              <div className="flex flex-row justify-between my-5">
                <p className="text-sm text-gray-500 flex flex-col items-center font-satoshi font-medium"><Star className="w-5"/> {repo.stargazers_count} Stars</p>
                <p className="text-sm text-gray-500 flex flex-col items-center font-satoshi font-medium"><GitBranch className="w-5"/> {repo.forks_count} Forks</p>
                <p className="text-sm text-gray-500 flex flex-col items-center font-satoshi font-medium"><Eye className="w-5"/> {repo.watchers} Views</p>
              </div>

              <input type="text" value={repo.clone_url} className="py-1 px-2 w-full font-mono bg-gray-800 text-gray-100 font-normal rounded-md" readOnly/>
              <div className="w-full flex flex-row space-x-2 my-5">
              <button className="text-gray-100 bg-gray-800 rounded-md border p-2 flex flex-row items-center gap-2 justify-center font-satoshi font-normal cursor-pointer border-gray-400 w-full" onClick={handleCopy}><Copy className="w-5 h-5" /> Clone Repo</button>
              <button className="text-gray-800 rounded-md border p-2 flex flex-row items-center gap-2 justify-center font-satoshi font-normal cursor-pointer border-gray-800 w-full" onClick={()=>(navigate(repo.html_url))}><Github className="w-5 h-5" /> Open Repo</button>
              </div>
          </div>

        </div>
      </ClickSpark>

      <Footer />
    </>
  );
}
