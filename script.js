const jsonData = [
    { "id": 1, "name": "Swiper", "image": "characters/char1.png" },
    { "id": 2, "name": "FatPack", "image": "characters/dikke.png" },
    { "id": 3, "name": "Mario", "image": "characters/mario.png" },
    { "id": 4, "name": "Politie", "image": "characters/politie.png" },
    { "id": 5, "name": "Soldaat", "image": "characters/soldaat.png" },
    { "id": 6, "name": "Jemairo", "image": "characters/jemairo.png" },
    { "id": 7, "name": "Spiderman", "image": "characters/spiderman.png" },
    { "id": 8, "name": "Batman", "image": "characters/batman.png" },
    { "id": 8, "name": "Mustafa", "image": "characters/m.png" }


];

const characterContainer = document.getElementById("characterList");
const characterNameElement = document.getElementById("characterName");
const characterImageElement = document.getElementById("characterImage");

function updateCharacterDetails(character) {
    characterNameElement.textContent = character.name;
    characterImageElement.src = `${character.image}`;
}

function activateCharacter(characterDiv) {
    document.querySelectorAll(".flex-container > div").forEach(div => {
        div.style.backgroundColor = "#f1f1f1";
    });

    characterDiv.style.backgroundColor = "#686868";
}

jsonData.forEach(character => {
    const characterDiv = document.createElement("div");

    characterDiv.style.backgroundImage = `url(${character.image})`;
    characterDiv.style.backgroundSize = "cover";

    characterDiv.addEventListener("click", function () {
        updateCharacterDetails(character);
        activateCharacter(characterDiv);
    });

    characterContainer.appendChild(characterDiv);
});

updateCharacterDetails(jsonData[0]);