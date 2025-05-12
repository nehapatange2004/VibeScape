import {
  TextField,
  Box,
  Button,
  Card,
  Typography,
  InputAdornment,
} from "@mui/material";
import {  Visibility, VisibilityOff } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { auth } from "../wrapper/authWrapper";

export default function Register() {
  // const [email, setEmail] = useState<string>("");

  const [error, setError] = useState<boolean>(false);
  const [helperText, setHelperText] = useState<String>("");
  const [showPassword, setShowPassword] = useState(false);
  const [page, setPage] = useState("register");
  const { setIsUserLoggedIn } = auth(); // Call auth() without destructuring since its elements are unused.
  type registrationFormDetails = {
    name: string;
    email: string;
    password: string;
  };
  const [registrationForm, setForm] = useState<registrationFormDetails>({
    name: "",
    email: "",
    password: "",
  });
  //to change inputVaribales.value dynamically..
  const handleForm = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    console.log(
      "changed val in registrationForm state change: ",
      event.target.value
    );
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const validate = () => {
    if (
      !registrationForm.email.includes("@") ||
      !registrationForm.email.includes(".") ||
      registrationForm.email.length === 0
    ) {
      console.log("email error");
      setHelperText("Please enter a valid email id!");
      setError(true);
      return;
    }

    setError(false);
    setIsUserLoggedIn(true);
  };

  const signIn = (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backdropFilter: "blur(3px)",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "@media (max-width:600px)": {
          // alignItems:"flex-start",
          overflow: "auto",
        },
      }}
    >
      <Card
        sx={{
          p: 3,
          paddingInline: 5,
          backgroundColor: "rgba(255, 243, 233, 0.99)",
          backdropFilter: "blur(8px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "300px",
          "@media (max-width:600px)": {
            // alignItems:"flex-start",
            width: "250px",
          },
        }}
      >
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // gap: 2,
            width: "300px",
            backgroundColor: "transparent",
          }}
        >
          <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }}>
            Sign-in
          </Typography>

          <TextField
            error={error}
            helperText={helperText}
            id="userEmail"
            margin="dense"
            fullWidth
            name="email"
            label="Email"
            variant="standard"
            required
            onChange={handleForm}
            onBlur={validate}
          />

          <TextField
            id="standard-adornment-password"
            label="Password"
            margin="dense"
            variant="standard"
            fullWidth
            onChange={handleForm}
            name="password"
            required
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <br />
          <Button
            variant="contained"
            size="medium"
            fullWidth
            onClick={validate}
          >
            Sign-in
          </Button>
          <Typography sx={{ fontSize: "0.8rem" }}>
            Don't have an account?
            <Button
              size="small"
              color="info"
              onClick={() => {
                validate();
                setPage("register");
              }}
            >
              sign-up
            </Button>
          </Typography>
        </Box>
      </Card>
    </Box>
  );

  const register = (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "@media (max-width:600px)": {
          // alignItems:"flex-start",
          overflow: "auto",
        },
      }}
    >
      <Card
        sx={{
          p: 3,
          paddingInline: 5,
          backgroundColor: "rgba(255, 243, 233, 0.99)",
          backdropFilter: "blur(8px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "300px",
          "@media (max-width:600px)": {
            // alignItems:"flex-start",
            width: "250px",
          },
        }}
      >
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // gap: 2,
            width: "300px",
            backgroundColor: "transparent",
          }}
        >
          <Typography sx={{ fontSize: "1rem",}}>
            Sign-up
          </Typography>
          <TextField
            id="userName"
            margin="dense"
            
            fullWidth
            // helperText ={helperText}
            // error= {error}
            name="name"
            onChange={handleForm}
            label="Enter Name"
            variant="standard"
            required
          />

          <TextField
            error={error}
            helperText={error ? helperText : ""}
            id="userEmail"
            margin="dense"
            fullWidth
            name="email"
            label="Email"
            variant="standard"
            required
            onChange={handleForm}
            onBlur={validate}
            
          />

          <TextField
            id="standard-adornment-password"
            label="Password"
            
            margin="dense"
            variant="standard"
            fullWidth
            onChange={handleForm}
            // helperText = {helperText}
            // error = {error}
            name="password"
            required
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          
          <br />
          <Button
            variant="contained"
            size="medium"
            fullWidth
            onClick={validate}
          >
            Register
          </Button>
          <Typography sx={{ fontSize: "0.8rem" }}>
            Already have an account?
            <Button
              size="small"
              color="info"
              onClick={() => {
                validate();
                setPage("signIn");
              }}
            >
              Sign-in
            </Button>
            <Button
              size="small"
              color="info"
              onClick={() => {
                setPage("");
              }}
            >
              Close
            </Button>
          </Typography>
        </Box>
      </Card>
    </Box>
  );

  if (page) {
    return page === "register" ? register : signIn;
  }
  return null;
}
