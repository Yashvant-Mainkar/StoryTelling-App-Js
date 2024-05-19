const storyData = {
    start: {
        title: "Start of the Story",
        content: "You wake up in a mysterious forest. What do you do?",
        choices: {
            "Explore the forest": "forest",
            "Stay put and wait for help": "wait"
        }
    },
    forest: {
        title: "Exploring the Forest",
        content: "You come across a fork in the road. Which path do you take?",
        choices: {
            "Go left": "leftPath",
            "Go right": "rightPath"
        }
    },
    leftPath: {
        title: "Left Path",
        content: "You find a hidden cave. Do you dare to enter?",
        choices: {
            "Enter the cave": "cave",
            "Continue exploring the forest": "forest"
        }
    },
    rightPath: {
        title: "Right Path",
        content: "You stumble upon a friendly village. What do you do?",
        choices: {
            "Explore the village": "village",
            "Return to the forest": "forest"
        }
    },
    cave: {
        title: "Dark Cave",
        content: "Inside the cave, you find a treasure chest. What do you do?",
        choices: {
            "Open the chest": "treasure",
            "Leave the cave": "forest"
        }
    },
    treasure: {
        title: "Treasure Found!",
        content: "Congratulations! You found the legendary treasure and became rich beyond measure.",
        choices: {}
    },
    wait: {
        title: "Waiting",
        content: "You wait for hours, but nobody comes. What do you do?",
        choices: {
            "Continue waiting": "wait",
            "Start walking": "forest"
        }
    },
    village: {
        title: "Exploring the Village",
        content: "You meet friendly villagers who offer you food and shelter. What do you do?",
        choices: {
            "Accept their hospitality": "hospitality",
            "Leave the village": "forest"
        }
    },
    hospitality: {
        title: "Hospitality",
        content: "You spend a peaceful night in the village and make new friends.",
        choices: {}
    }
};

let currentScene = "start";

function displayScene(scene) {
    const { title, content, choices } = storyData[scene];
    document.getElementById("story-title").innerText = title;
    document.getElementById("story-content").innerText = content;

    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";

    for (const [choiceText, nextScene] of Object.entries(choices)) {
        const choiceButton = document.createElement("button");
        choiceButton.textContent = choiceText;
        choiceButton.addEventListener("click", () => goToScene(nextScene));
        choicesContainer.appendChild(choiceButton);
    }
}

function goToScene(scene) {
    currentScene = scene;
    displayScene(scene);
}

// Initial display
displayScene(currentScene);
