import { Autocomplete, Dialog, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useMemo, useState } from "react";
import { wikiAPI } from "@/api/wikiAPI";
import axios from "axios";
import { Wiki } from "@/types/Hotdeal/wiki";
import { useRouter } from "next/router";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchModal({ open, onClose }: SearchModalProps){
  const [searchOptions, setSearchOptions] = useState<string[]>([]);
  const router = useRouter();
  const handleChangeSearchText = async (e: React.ChangeEvent<HTMLTextAreaElement>)=>{
    const word = e.target.value;
    const wikis = await wikiAPI.searchWikis(word);
    if(wikis){
      setSearchOptions(wikis.map((item: Wiki)=> item.title))
    }
  }
  const handleChangeSelect = (e: React.SyntheticEvent<Element, Event>, value: string | null)=>{
    router.push(`/wiki/${value}`);
    onClose();
  }

  return (
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        <Autocomplete
          onChange={handleChangeSelect}
          options={searchOptions}
          fullWidth
          freeSolo
          renderInput={(params) => (
            <TextField
              {...params}
              type="search"
              fullWidth
              onChange={handleChangeSearchText}
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
