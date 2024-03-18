const card = document.getElementById('card');

const list = [
    {
        name: "YouTube",
        src: "./images/youtube.png"
    },
    {
        name: "Instagram",
        src: "./images/instagram.png"
    },
    {
        name: "Gmail",
        src: "./images/gmail.png"
    },
    {
        name: "App Store",
        src: "./images/app-store.png"
    },
    {
        name: "App",
        src: "./images/app.png"
    },
    {
        name: "GitHub",
        src: "./images/github.png"
    },
    {
        name: "Drive",
        src: "./images/google-drive.png"
    },
    {
        name: "LinkedIn",
        src: "./images/linkedin.png"
    },
    {
        name: "Telegram",
        src: "./images/telegram.png"
    },
    {
        name: "Tiktok",
        src: "./images/tiktok.png"
    },
    {
        name: "Twitter",
        src: "./images/twitter.png"
    },
    {
        name: "Whatsapp",
        src: "./images/whatsapp.png"
    },
    {
        name: "X",
        src: "./images/x.png"
    }
];

const renderCard = () => {
    for(const item of list){
        card.innerHTML += `
            <li class="listItem">
                <img class="listImage" src="${item.src}" />
                <p class="listTitle">${item.name}</p>
            </li>
        `;
    }
}

renderCard();