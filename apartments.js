const zoneInformation = {
    entrance: {
        index: "01",
        title: "Главный вход",
        description: "Пространство, с которого начинается знакомство с Fortuna Parkside."
    },
    lobby: {
        index: "02",
        title: "Холл",
        description: "Общая зона для жителей и гостей жилого комплекса."
    },
    elevators: {
        index: "03",
        title: "Лифты",
        description: "Подъём на жилые этажи комплекса — с первого по пятый."
    },
    spa: {
        index: "04",
        title: "SPA и сауна",
        description: "Зона отдыха и восстановления для жителей комплекса."
    },
    fitness: {
        index: "05",
        title: "Фитнес-зал",
        description: "Панорамное пространство для тренировок и активного образа жизни."
    },
    pool: {
        index: "06",
        title: "Бассейн",
        description: "Открытая зона отдыха у воды на территории комплекса."
    },
    garden: {
        index: "07",
        title: "Сад и отдых",
        description: "Благоустроенная территория, где можно провести время на свежем воздухе."
    }
};

const zoneButtons = document.querySelectorAll("[data-zone]");
const zoneIndex = document.querySelector("#zone-index");
const zoneTitle = document.querySelector("#zone-title");
const zoneDescription = document.querySelector("#zone-description");

zoneButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const information = zoneInformation[button.dataset.zone];

        if (!information) {
            return;
        }

        zoneIndex.textContent = information.index;
        zoneTitle.textContent = information.title;
        zoneDescription.textContent = information.description;

        zoneButtons.forEach((zoneButton) => {
            const isSelected = zoneButton === button;
            zoneButton.classList.toggle("is-selected", isSelected);
            zoneButton.setAttribute("aria-pressed", String(isSelected));
        });
    });
});

document.querySelectorAll("[data-dialog]").forEach((button) => {
    button.addEventListener("click", () => {
        const dialog = document.getElementById(button.dataset.dialog);
        dialog?.showModal();
    });
});

document.querySelectorAll("[data-close-dialog]").forEach((link) => {
    link.addEventListener("click", () => {
        link.closest("dialog")?.close();
    });
});

document.querySelectorAll("dialog").forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) {
            dialog.close();
        }
    });
});
