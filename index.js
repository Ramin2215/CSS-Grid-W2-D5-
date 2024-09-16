document.addEventListener("DOMContentLoaded", function () {
    const grid = document.querySelector(".masonry-grid");
    const items = grid.querySelectorAll(".masonry-item");

    // Function to update the grid row span based on the image height
    function updateGridRowSpan() {
        items.forEach((item) => {
            const img = item.querySelector("img");
            img.onload = () => {
                const rowSpan = Math.ceil(
                    img.getBoundingClientRect().height / 10
                );
                item.style.gridRowEnd = `span ${rowSpan}`;
            };
        });
    }

    // Call function to update grid row span
    updateGridRowSpan();
});
