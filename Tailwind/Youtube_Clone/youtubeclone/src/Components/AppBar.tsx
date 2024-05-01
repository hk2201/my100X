import { SearchBar } from "./SearchBar";

export const AppBar = () => {
  return (
    <div className="flex justify-between pt-3">
      <div>Youtube</div>
      <div>
        <SearchBar />
      </div>
      <div>Sign In</div>
    </div>
  );
};
