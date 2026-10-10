import type { YugiohCardProps } from "../types/YugiohCard";

export const YugiohCard = ({ image, title, attribute, type, attack, defense }: YugiohCardProps) => {
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-title">{title}</span>
        <span className="card-attribute">{attribute}</span>
      </div>

      <img src={image} alt={title} className="card-image" />

      <p className="card-type">{type}</p>

      <div className="card-stats">
        <span />
        <div className="card-stats-values">
          <span>ATK/{attack}</span>
          <span>DEF/{defense}</span>
        </div>
      </div>
    </div>
  );
};
