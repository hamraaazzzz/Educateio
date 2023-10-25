document.addEventListener("DOMContentLoaded", function () {
    const observerButton = document.getElementById("observerButton");
    const actionTakerButton = document.getElementById("actionTakerButton");
    const container1 = document.querySelector(".part-6-container-1");
    const container2 = document.querySelector(".part-6-container-2");

    // Initially hiding container 2
    container2.style.opacity = 0;
    container2.style.display = "none";

    // Transition effect For Containers
    container1.style.transition = "opacity 0.5s";
    container2.style.transition = "opacity 0.5s";

    observerButton.addEventListener("click", function () {
        container1.style.display = "block";
        container2.style.display = "none";

        // Timeout to fade effect works properly
        setTimeout(() => {
            container1.style.opacity = 1;
            container2.style.opacity = 0;
        }, 10);
    });

    actionTakerButton.addEventListener("click", function () {
        container1.style.display = "none";
        container2.style.display = "block";

        // Timeout to fade effect Works Properly
        setTimeout(() => {
            container1.style.opacity = 0;
            container2.style.opacity = 1;
        }, 10);
    });
    });
    