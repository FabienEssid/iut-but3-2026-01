import { HeartIcon } from "lucide-react";
import type { YugiohCardProps } from "../types/YugiohCard";

type YugiohCardComponentProps = YugiohCardProps & {
  isFavorite: boolean;
  onToggleFavorite: () => void;
};

export const YugiohCard = ({
  image,
  title,
  attribute,
  type,
  attack,
  defense,
  isSoldOut,
  isFavorite,
  onToggleFavorite,
}: YugiohCardComponentProps) => {
  return (
    <div className="card gap-2">
      <button type="button" onClick={onToggleFavorite} className="card-favorite mb-2">
        <HeartIcon fill={isFavorite ? "currentColor" : "none"} className={isFavorite ? "text-red-500" : "text-slate-400"} />
      </button>
      <div className="card-header">
        <span className="card-title">{title}</span>
        <span className="card-attribute">{attribute}</span>
      </div>

      <img src={image} alt={title} className="card-image" />

      <p className="card-type">{type}</p>

      <div className="card-stats">
        {isSoldOut ? <p className="card-sold-out">Sold Out</p> : <span />}
        <div className="card-stats-values">
          <span>ATK/{attack}</span>
          <span>DEF/{defense}</span>
        </div>
      </div>
    </div>
  );
};
