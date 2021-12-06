function setPlayerStyle(player) {
  player.style.border = "1px solid red";
  player.style.margin = "10px";
  player.style.padding = "10px";
  player.style.borderRadius = "15px";
}

const players = document.getElementsByClassName("player");
for (const player of players) {
  setPlayerStyle(player);
}

function addPlayer() {
  const playerContainer = document.getElementById("players");
  const player = document.createElement("div");
  player.classList.add("player");
  player.innerHTML = `
  <h4 class="player-name">New player</h4>
    <p>
    Facere, beatae assumenda eos, hic ab at est inventore consectetur
    doloribus dolorem, rem suscipit. Quod id odit dolor expedita
    perspiciatis odio blanditiis ea, facilis, doloremque consectetur
    vitae eius nostrum laborum!
    </p>
`;
  setPlayerStyle(player);
  playerContainer.appendChild(player);
}

document.getElementById("players").addEventListener("click", function (event) {
  if (event.target.tagName.toLowerCase() == "div") {
    event.target.style.backgroundColor = "yellow";
  } else {
    event.target.parentNode.style.backgroundColor = "yellow";
  }
});
