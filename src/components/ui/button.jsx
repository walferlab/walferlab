export default function Button({variant='default', text='', onclick=()=>{}}) {

    const buttonVariant = {
        default : {"p-2 m-1 text-[#000000]"},
        ghost : {""},
        outlined : {},
    };

    return (
        <>
        <button className=`{buttonVariant?[variant]}`></button>
        </>
    )
}