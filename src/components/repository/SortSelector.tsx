import { SortOrder } from "../../types/sort";

interface SortSelectorProps {
  order: SortOrder;
  onOrderChange: (value: SortOrder) => void;
}

export const SortSelector = ({ order, onOrderChange }: SortSelectorProps) => {
  return (
    <>
      <label htmlFor="sort-order" className="form-label">
        Ordenar repositórios por:
      </label>
      <select
        className="form-select mb-4"
        value={order}
        onChange={(e) => onOrderChange(e.target.value as SortOrder)}
      >
        <option value="desc">Mais estrelas</option>
        <option value="asc">Menos estrelas</option>
      </select>
    </>
  );
};
