import "./styles.css";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type CardLinkProps = {
  url: string;
  title: string;
  icon: IconProp;
  className?: string;
};

export default function CardLink(props: CardLinkProps) {
  return (
    <div className="card card-link">
      <a href={props.url}>
        <div className="card-body">
          <FontAwesomeIcon icon={props.icon} className="icon card__icon" />
          <h3 className="card-title">{props.title}</h3>
        </div>
      </a>
    </div>
  );
}
