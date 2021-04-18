import { useDispatch, useSelector } from "react-redux";
import { setVisibilityFilter } from "../actions/todoActions";
import { selectVisibilityFilter } from "../selectors/todoSelectors";

const filters = ["all", "active", "completed"];

const TodoFilter = () => {
  const dispatch = useDispatch();
  const visibilityFilter = useSelector(selectVisibilityFilter);

  return (
    <div>
      {filters.map((filter) => (
        <button
          disabled={filter === visibilityFilter}
          onClick={() => dispatch(setVisibilityFilter(filter))}
          key={filter}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default TodoFilter;
