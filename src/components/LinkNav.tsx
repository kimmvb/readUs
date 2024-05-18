import { Link } from "react-router-dom";

interface Props {
    name: string;
    icon?: string;
    href: string;
}

export const LinkNav: React.FC<Props> = ({ name, icon, href }) => {
    return (
        <Link className="bg-mustard text-soft-gray flex flex-row gap-x-2 items-center justify-between rounded-md py-1 px-5 drop-shadow-lg text-lg hover:bg-[#A3CAE7] transition md:py-0.5 md:px-3" to={href}>{name}
            {icon && (
                <img src={icon} alt={`${name} button`} />
            )
            }
        </Link>
    )
}