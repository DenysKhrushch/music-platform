import { SelectChangeEvent } from "@mui/material";
import { DropdownOption } from "../dropdown";

export interface TeamSearchInputProps {
  selected: DropdownOption;
  onSelectChange: (event: SelectChangeEvent) => void;
  setOpen: (v: boolean) => void;
}
