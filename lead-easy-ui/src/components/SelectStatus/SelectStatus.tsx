import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Input,
  Grid,
  Button,
  FormHelperText
} from "@material-ui/core";
import { useState } from "react";

{/* <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value={0}>Interested</MenuItem>
    <MenuItem value={1}>Closed</MenuItem>
    <MenuItem value={2}>Dropped</MenuItem>
  </Select>
</FormControl> */}


function SelectStatus() {
  const [status, setStatus] = useState(0);
  const handleChange = (event: any) => {
    setStatus(event.target.value);
  };
  return (
    <form autoComplete="off">
      <FormControl style={{padding: "10px"}} >
        <Select
          value={status}
          onChange={handleChange}
          input={<Input name="currency" />}
        >
          <MenuItem value={0}>Interested</MenuItem>
          <MenuItem value={1}>Closed</MenuItem>
          <MenuItem value={2}>Dropped</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
}

export default SelectStatus;