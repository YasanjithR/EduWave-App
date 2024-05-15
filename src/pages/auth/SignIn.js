import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";

import bgmain from "../../assets/bg-main.jpg";
import useUserLogin from "../../hooks/userLogin/useUserLogin";
import useAuthRedirect from "../../hooks/auth/useAuthRedirect";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit">Eduwave</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignIn() {
  useAuthRedirect();
  const navigate = useNavigate();
  const [role, setRole] = React.useState("");
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [dialogMessage, setDialogMessage] = React.useState("");
  const { login, error } = useUserLogin();

  const handleRoleChange = (event) => {
    setRole(event.target.value.toLowerCase());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get("username");
    const password = data.get("password");
    
    await login(username, password, role);
    if (error) {
      setDialogMessage(error);
      setDialogOpen(true);
    } else {
      setDialogMessage("Login successful");
      setDialogOpen(true);
    }
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    if (!error) {
      if (role === "learner") {
        navigate("/home-student");
      } else if (role === "admin") {
        navigate("/home-admin");
      } else if (role === "instructor") {
        navigate("/home-instructor");
      }
    }
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${bgmain})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="User Name"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControl fullWidth margin="normal">
              <InputLabel id="role-label">Role</InputLabel>
              <Select
                labelId="role-label"
                id="role"
                value={role}
                label="Role"
                onChange={handleRoleChange}
              >
                <MenuItem value={"instructor"}>Instructor</MenuItem>
                <MenuItem value={"admin"}>Admin</MenuItem>
                <MenuItem value={"learner"}>Learner</MenuItem>
              </Select>
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <RouterLink
                  to="/signup"
                  variant="body2"
                  style={{ color: "#4974b8" }}
                >
                  {"Don't have an account? Sign Up"}
                </RouterLink>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
      <Dialog open={dialogOpen}>
        <DialogTitle>{error ? "Error" : "Success"}</DialogTitle>
        <DialogContent>
          <DialogContentText>{dialogMessage}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}
