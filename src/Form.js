import React from "react";

const Form = (props) => {
  //STATE FOR THE FORM
  const [formData, setFormData] = React.useState(props.weed);

  //FUNCTIONS
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    props.handleSubmit(formData); // Submit to Parents desired function
    props.history.push("/"); //Push back to display page
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <small>Name  </small>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <small>Image URL </small>
      <input
        type="text"
        name="img"
        value={formData.img}
        onChange={handleChange}
      />
      <small>Strain </small>
      <input
        type="text"
        name="strain"
        value={formData.strain}
        onChange={handleChange}
      />
      <input type="submit" value={props.label} />
    </form>
  );
};

export default Form;
