const feedbackForm = document.getElementById("feedback-form");

// The event being listened to is the form submission event, indicated by "submit"
feedbackForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // .value property of the form elements is used to access the entered data:
  const name = event.target.elements.name.value;
  const email = event.target.elements.email.value;
  const feedback = event.target.elements.feedback.value;
  const experience = event.target.elements.experience.value;
  const subscribe = event.target.elements.subscribe.checked; // Checkbox value
  const category = event.target.elements.category.value; // Select dropdown value

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Feedback:", feedback);
  console.log("Overall Experience:", experience);
  console.log("Subscribe to Newsletter:", subscribe);
  console.log("Category:", category);
});


