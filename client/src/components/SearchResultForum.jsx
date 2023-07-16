import { useNavigate } from "react-router-dom";

const SearchResultForum = (props) => {
    const navigate = useNavigate();
    const handleClick = (e) => {
      e.preventDefault();
      navigate(props.search._id);
    };

  return (
    <div>
      <span className="hover:cursor-pointer" key={props.search._id} onClick={handleClick}>{props.search.title}</span>
    </div>
  );
};

export default SearchResultForum;
