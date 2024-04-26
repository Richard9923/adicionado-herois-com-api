const heroFotos = document.getElementById("heroFotos");
const hero = document.getElementById("hero");
console.log(hero);

const token = "921995215608152";
const link = "https://superheroapi.com/api.php";

const imagemHero = async (id) => {
  const response = await fetch(`${link}/${token}/${id}`);
  const data = await response.json();
  heroFotos.innerHTML += `<img src='${data.image.url}' width=100 heigth=100/>`;
};

const random = () => {
  const numberRandom = Math.floor(Math.random() * 731) + 1;
  return numberRandom;
};

const randomChoice = () => {
  imagemHero(random());
};

hero.onclick = () => randomChoice();
