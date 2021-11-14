import TextField from "@mui/material/TextField";

import classes from "./ContactForm.module.scss";

const ContactForm = () => {
  return (
    <section id="contact" className={classes.contact}>
      <div className={classes.container}>
        <div className={classes.heading}>
          <h1 className={classes.contact__title}>CONTACT</h1>
          <div className={classes.separator}></div>
          <span className={classes.contact__description}>
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </span>
        </div>

        <form action="https://formsubmit.co/5cfba8f9fbe97a48f77190cd5ac7d09c" method="POST" className={classes.form}>
            <label className={classes.label}>Name</label>
            <TextField
              required
              className={classes.input}
              id="outlined-basic"
              label="Enter your name"
              variant="outlined"
              name="name"
            />
            <label className={classes.label}>Email</label>
            <TextField
              required
              className={classes.input}
              id="outlined-basic"
              type="email"
              label="Enter your e-mail"
              variant="outlined"
              name="email"
            />
            <label className={classes.label}>Message</label>
            <TextField
              required
              className={classes.input}
              id="outlined-multiline-static"
              label="Enter your message..."
              multiline
              rows={8}
              name="message"
            />

            <button
              className={classes.button}
              type="submit"
              variant="contained"
            >
              SUBMIT
            </button>
         
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
