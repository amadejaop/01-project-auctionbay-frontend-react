import "../assets/styles/BlackBgLink.css"

interface LinkProps {
    text: string,
    href: string,
}

export default function BlackBgLink(props: LinkProps) {
    return (
        <a href={props.href} className="blackbg-link">{props.text}</a>
    )
}