const navIconsKelompok3 = document.querySelectorAll(
    ".nav-iconkelompok3"
);

navIconsKelompok3.forEach((icon) => {
    icon.addEventListener("click", (event) => {
        const targetId = icon.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (!targetSection) return;

        event.preventDefault();

        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        navIconsKelompok3.forEach((item) => {
            item.classList.remove("activekelompok3");
            item.removeAttribute("aria-current");
        });

        icon.classList.add("activekelompok3");
        icon.setAttribute("aria-current", "location");
    });
});
