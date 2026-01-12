export default function Card({title='', desc='', author='', imgUrl='', githublink=()=>{}, projectdetail=()=>{}}) {
    return (
        <>
        <div className="flex flex-col p-1 rounded-xl max-w-md bg-gray-200">
            <div className="w-full h-auto aspect-video rounded-xl overflow-hidden border border-gray-300">
                <img src={imgUrl} alt={title} className="w-full h-full object-cover object-cente" />
            </div>
            <p className="text-lg text-gray-950 font-satoshi font-semibold mx-2 mt-1">{title}</p>
            <p className="text-sm text-gray-800 font-satoshi font-normal mx-2 mb-2">by <span className="font-medium">{author}</span></p>
            <p className="text-sm text-gray-700 font-satoshi font-normal max-h-5 m-2 overflow-hidden">{desc}</p>
            <div className="flex flex-col sm:flex-row items-center gap-2 justify-around m-2">
                <button className="text-sm text-gray-950 font-satoshi font-medium p-2 w-full rounded-xl border border-gray-800" onClick={githublink}>View on Github</button>
                <button className="text-sm text-gray-50 font-satoshi font-medium p-2 w-full rounded-xl border border-gray-800 bg-gray-800" onClick={projectdetail}>View Project</button>
            </div>
        </div>
        </>
    )
}