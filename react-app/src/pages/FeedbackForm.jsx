import React, { useState } from "react";
import Button from "../components/Button";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    subscribeNewsletter: false,
    rating: "",
    comments: "",
  });

  const [submittedFeedback, setSubmittedFeedback] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedFeedback(formData);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h2 className="text-xl font-bold mb-4">Feedback Form</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label>Gender:</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
            />{" "}
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="other"
              checked={formData.gender === "other"}
              onChange={handleChange}
            />{" "}
            Other
          </label>
        </div>
        <div className="flex items-center">
          <label>
            <input
              type="checkbox"
              name="subscribeNewsLetter"
              checked={formData.subscribeNewsLetter}
              onChange={handleChange}
            />{" "}
            Subscribe to newsletter
          </label>
        </div>
        <div className="flex flex-col">
          <label>Rating:</label>
          {[1, 2, 3, 4, 5].map((num) => (
            <label key={num}>
              <input
                type="radio"
                name="rating"
                value={num}
                checked={formData.rating === num.toString()}
                onChange={handleChange}
              />{" "}
              {num}
            </label>
          ))}
        </div>
        <div className="flex flex-col">
          <label htmlFor="comments">Additional comments:</label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
          ></textarea>
        </div>
        <Button color="black" type="submit">
          Submit Feedback
        </Button>
      </form>

      {submittedFeedback && (
        <div className="submitted-feedback">
          <h2>
            <strong>Submitted Feedback:</strong>
          </h2>
          <li>
            <strong>Name:</strong> {submittedFeedback.name}
          </li>
          <li>
            <strong>Email:</strong> {submittedFeedback.email}
          </li>
          <li>
            <strong>Gender:</strong> {submittedFeedback.gender}
          </li>
          <li>
            <strong>Subscribe to Newsletter:</strong>{" "}
            {submittedFeedback.isSubscribed ? "Yes" : "No"}
          </li>
          <li>
            <strong>Rating:</strong> {submittedFeedback.rating}
          </li>
          <li>
            <strong>Comments:</strong> {submittedFeedback.comments}
          </li>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
