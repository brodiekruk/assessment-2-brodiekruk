let weekdays = ["Monday", "Wednesday", "Friday"];

const rectangle = {
    height: 20,
    width: 15
}

function greetMe(name) {
    console.log("Hi " + name + "!")
}
greetMe("Great King of Evil Ganondorf");

function calculateTriangleArea(base, height) {
    return (base*height)*0.5
}

function countDown() {
    for (let i = 10; i >= 0; i--) {
        console.log(i);
    }
}

function countEvens(end) {
    for (let i = 2; i <= end; i += 2) {
        console.log(i);
    }
}
countEvens(9);

function checkAdverb(word) {
    if (word.endsWith("ly")) {
        return "adverb";
    } else {
        return "unknown";
    }
}

const materials = [
    {type: "straw", strength: 1},
    {type: "wood", strength: 5},
    {type: "brick", strength: 10}
];

function logMaterials(materialArray) {
    for (let i = 0; i < materialArray.length; i++) {
      const material = materialArray[i];
      console.log(material.type + " - " + material.strength);
    }
  }
  logMaterials(materials);

  function getStrengthOfMaterial(materialArray, type) {
    for (let i = 0; i < materialArray.length; i++) {
        const material = materialArray[i];
        if (material.type === type) {
          return material.strength;
        } 
    } 

}