// // Ensure you have TypeScript enabled in your VS Code settings

// const counterElements = document.querySelectorAll('.col-md-8'); // Get all counter elements
// const targetCounts = [3500, 2800, 6000, 3500]; // Target values for each counter

// window.addEventListener('load', () => {
//   counterElements.forEach((element, index) => {
//     // Start animation for each counter with its specific target value
//     countAnimation(element, targetCounts[index]);
//   });
// });

// function countAnimation(element, targetCount) {
//   let currentCount = 0; // Initialize current count for each element

//   function animate() {
//     if (currentCount < targetCount) {
//       // Increment current count with an appropriate value for smoother animation
//       currentCount += Math.ceil((targetCount - currentCount) / 100); // Example increment using ceil for smoother count up

//       // Format and update the displayed value
//       element.textContent = currentCount.toLocaleString();

//       // Use requestAnimationFrame for smooth animation
//       requestAnimationFrame(animate);
//     }
//   }

//   // Start the animation
//   animate();
// }
