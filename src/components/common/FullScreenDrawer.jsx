import { Drawer, IconButton, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import { SlClose } from "react-icons/sl";

export default function FullScreenDrawer({ open, onClose }) {
  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Black transparent background
        },
        padding: "0px !important",
      }}
    >
      <div className="h-screen flex flex-col p-4 relative">
        {/* Header with Close Button */}
        <div onClick={onClose} className="absolute top-4 right-4">
        <SlClose size={33} color="white"/>
        </div>
        <div
          id="search-center"
          className="flex items-center justify-center h-full"
        >
          <div className="flex flex-col items-center">  
            <div className="flex justify-between items-center text-white">
              <h2 className="text-lg font-semibold text-white">Search</h2>
            </div>
            <div className="mt-4 text-white">
              <TextField
                variant="outlined"
                placeholder="Search..."
                fullWidth
                InputProps={{
                  startAdornment: <Search className="text-white mr-2" />,
                }}
                InputLabelProps={{
                  style: {
                    color: "white",
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "& input": {
                      color: "white",
                    },
                    width: "100%",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
}
