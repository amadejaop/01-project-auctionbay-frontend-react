import "../assets/styles/YellowBgLink.css";

interface LinkProps {
  text: string;
  href: string;
}

export default function YellowBgLink(props: LinkProps) {
  return (
    <>
      <a href={props.href} className="yellow-link">
        {props.text}
      </a>
    </>
  );
}
