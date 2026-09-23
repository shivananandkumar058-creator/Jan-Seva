 /* Home -- Services,About,Project, and Contact ek page se dusre page per jane ke liye */

const navlinks = document.querySelectorAll(".navlink");
const tabs = document.querySelectorAll(".content");

navlinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Active nav link liye
        navlinks.forEach((item) => {
            if (item === link) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });

        // Show active tab
        const tabName = link.dataset.tab;

        tabs.forEach((tab) => {
            if (tab.id === tabName) {
                tab.classList.add("active");
            } else {
                tab.classList.remove("active");
            }
        });
        

    });
});