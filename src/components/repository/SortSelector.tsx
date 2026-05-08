type SortOrder = "asc" | "desc";

interface Props {
  order: SortOrder;
  setOrder: (value: SortOrder) => void;
}

export const SortSelector = ({ order, setOrder }: Props) => {
  return (
    <select
      className="form-select mb-4"
      value={order}
      onChange={(e) => setOrder(e.target.value as "asc" | "desc")}
    >
      <option value="desc">Mais estrelas</option>
      <option value="asc">Menos estrelas</option>
    </select>
  );
};
