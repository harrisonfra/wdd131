const character = {
    name: "Snortleblat",
    class: "Rogue Swamp Beast",
    level: 1,
    health: 90,
    image: "snortleblat.jpg",

    attacked: function () {
        this.health -= 20;

        if (this.health <= 0) {
            this.health = 0;
            alert(`${this.name} has died!`);
        }

        renderCharacter();
    },

    levelUp: function () {
        this.level++;
        renderCharacter();
    }
};

function renderCharacter() {
    document.querySelector("#characterName").textContent = character.name;
    document.querySelector("#characterClass").textContent = character.class;
    document.querySelector("#characterLevel").textContent = character.level;
    document.querySelector("#characterHealth").textContent = character.health;

    document.querySelector("#characterImage").src = character.image;
    document.querySelector("#characterImage").alt = character.name;
}

renderCharacter();

document.querySelector("#attackBtn").addEventListener("click", function () {
    character.attacked();
});

document.querySelector("#levelBtn").addEventListener("click", function () {
    character.levelUp();
});