import { useState } from "react";
import "./User.scss";
type form = {
  name: string;
  email: string;
  message: string;
};
const UserForm = () => {
  const [form, setForm] = useState<Partial<form>>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<form>>({});
  const handleInputChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const validate = (requiredFields: string[]) => {
    const formError: { [key: string]: string } = {};
    requiredFields.forEach((el: string) => {
      const key = el as keyof form;

      if (!form[key]?.trim()) formError[key] = `${key} is required`;
    });

    setErrors(formError);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validate(Object.keys(form));
  };
  return (
    <div className="user-wrapper">
      <h1>User Form</h1>

      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="name"> Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            placeholder="Enter the name"
          />
          {errors?.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="input-wrapper">
          <label htmlFor="email"> Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="Enter the email"
          />{" "}
          {errors?.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="input-wrapper">
          <label htmlFor="message"> Message </label>
          <textarea
            // type="textarea"
            id="message"
            name="message"
            value={form.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            placeholder="Enter the message"
          ></textarea>

          {errors?.message && <p className="error">{errors.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default UserForm;
