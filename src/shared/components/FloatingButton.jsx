import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

function FloatingButton() {
  const navigate = useNavigate();
  const navigateToAddBlog = () => {
    navigate('/blogs/add');
  }

  return (
    <Fab
      color="primary"
      aria-label="add"
      sx={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 1000,
      }}
      onClick={navigateToAddBlog}
    >
      <AddIcon />
    </Fab>
  );
}

export default FloatingButton;
