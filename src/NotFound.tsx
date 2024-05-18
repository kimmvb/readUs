import { LinkNav } from "./components/LinkNav"

export const NotFound = () => {
    return(
        <div className='text-black text-5xl m-8 flex justify-center items-center flex-col flex-grow gap-y-5'>
            <p>Not Found</p>
            <LinkNav name="Volver a catálogo" href="/"/>
            </div>
    )
}