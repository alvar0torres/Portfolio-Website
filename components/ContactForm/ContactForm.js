import Card from "../UI/Card";

import TextField from "@mui/material/TextField";

import classes from "./ContactForm.module.scss";

const ContactForm = () => {
  return (
    <section>
      <div className={classes.container}>
        <div className={classes.heading}>
          <h1 className={classes.contact__title}>CONTACT</h1>
          <div className={classes.separator}></div>
          <span className={classes.contact__description}>
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </span>
        </div>

        <form className={classes.form}>
          <Card>
            <TextField
              required
              id="outlined-basic"
              label="Enter your name"
              variant="outlined"
            />
            <TextField
              required
              id="outlined-basic"
              type="email"
              label="Enter your e-mail"
              variant="outlined"
            />
            <TextField
              required
              id="outlined-multiline-static"
              label="Enter your message..."
              multiline
              rows={8}
            />

            <button
              className={classes.button}
              type="submit"
              variant="contained"
            >
              SUBMIT
            </button>
          </Card>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
