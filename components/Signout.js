import { VscSignOut } from 'react-icons/vsc'

const Signout = () => {
    return (
        <div className="w-max h-20 flex justify-center items-center" >
            <button
                className="max-w-max rounded-lg flex items-center jusity-center dark:bg-zinc-900 bg-zinc-100 dark:text-zinc-100 text-zinc-900 py-2 px-6 hover:shadow-xl duration-200 "
                onClick={() => signIn('github')}
            >
                <VscSignOut className="inline-block mr-2 h-4 w-4 md:h-5 md:w-5 " />
                Sign In
            </button>
        </div>
    )
}

export default Signout