// document.addEventListener("DOMContentLoaded", () => {
//   const container = document.querySelector(".outer");
//   const firstPanel = document.querySelector(".home");
//   firstPanel.classList.add("active");

//   container.addEventListener("click", (e) => {
//     const clickPanel = e.target.closest(".panel");
//     if (!clickPanel) return;

//     const activePanel = container.querySelector(".panel.active");
//     if (activePanel) {
//       activePanel.classList.remove("active");
//     }
//     if (clickPanel !== activePanel) {
//       clickPanel.classList.add("active");
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  // Add 'active' class to the first .home element when the document is ready
  document.querySelector(".home").classList.add("active");

  // Select all panel elements
  const panels = document.querySelectorAll(".panel");

  // Add click event listener to each panel
  panels.forEach((panel) => {
    panel.addEventListener("click", () => {
      // Remove 'active' class from all panels
      panels.forEach((p) => p.classList.remove("active"));

      // Toggle 'active' class on the clicked panel
      panel.classList.toggle("active");
    });
  });
});
