import { SortOrder } from "../../types/sort";

interface SortSelectorProps {
  order: SortOrder;
  onOrderChange: (value: SortOrder) => void;
}

export const SortSelector = ({ order, onOrderChange }: SortSelectorProps) => {
  return (
    <div className="mb-4">
      <label htmlFor="sort-order" className="form-label small text-muted mb-1">
        Ordenar repositórios
      </label>
      <div className="row g-2">
        <div className="col-12 col-sm-8 col-lg-5">
          <select
            id="sort-order"
            className="form-select form-select-sm shadow-sm w-100"
            value={order}
            onChange={(e) => onOrderChange(e.target.value as SortOrder)}
          >
            <option value="desc">Mais estrelas</option>
            <option value="asc">Menos estrelas</option>
          </select>
        </div>
      </div>
    </div>
  );
};
