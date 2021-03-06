const Config = {
    name: "user",
    scale: 1,
    Links: [
        [
            "Brivity",
            [
                ["CRM", "www.brivity.com/super"],
                ["CMA", "https://www.example.com"],
                ["KWKLY", "https://www.example.com"],
                ["Marketer", "https://www.example.com"],
                ["IDX", "https://www.example.com"],
                ["BlueRoof", "https://www.example.com"]
            ]
        ],
        [
            "Support",
            [
                ["link", "https://www.example.com"],
                ["link", "https://www.example.com"],
                ["CMA", "https://www.example.com"],
                ["CMA", "https://www.example.com"]
            ]
        ],
        [
            "Other",
            [
                ["link", "https://www.example.com"],
                ["link", "https://www.example.com"],
                ["link", "https://www.example.com"]
            ]
        ]
    ]
}

const Main = (() => {
    const list = document.getElementById("list");
    const names = document.querySelectorAll("[data-Name]");
    const search = document.getElementById("search");
    const form = document.forms[0];

    const init = () => {
        list.innerHTML = Config.Links.map(([gName, Links]) => `
            <li>
                <h1 onclick="this.parentNode.classList.toggle('hideChildren')">${gName}</h1>
                <ul>
                    ${Links.map(([lName, url]) => `
                        <li>
                            <a href="${url}">${lName}</a>
                        </li>`
                    ).join("")}
                </ul>
            </li>` 
        ).join("")
        
        names.forEach(el => {
            el.innerText = Config.name;
        });

        document.addEventListener("keydown", e => e.key.length === 1 && search.focus());
        search.addEventListener("keydown", () => (window.event ? event.keyCode : e.which) == 13 && form.submit());
    };

    return {
        init,
    };
})();

Main.init()
