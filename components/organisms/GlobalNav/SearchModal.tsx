import { Autocomplete, Dialog, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ open, onClose }) => {
  const [searchOptions, setSearchOptions] = useState([
    "Option 1",
    "Option 2",
    "Option 3",
  ]);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <Autocomplete
        options={searchOptions}
        fullWidth
        freeSolo
        renderInput={(params) => (
          <TextField
            {...params}
            type="search"
            fullWidth
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: null,
            }}
          />
        )}
      />
    </Dialog>
  );
};

export default SearchModal;
