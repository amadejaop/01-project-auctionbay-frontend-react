import "../assets/styles/BoldLink.css";

interface LinkProps {
    text: string,
    href: string,
}

export default function BlackBgLink(props: LinkProps) {
    return (
        <a href={props.href} className="bold-link">{props.text}</a>
    )
}