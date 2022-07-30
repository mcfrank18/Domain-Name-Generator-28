let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

for (let p = 0; p < 2; p++) {
  for (let a = 0; a < 2; a++) {
    for (let n = 0; n < 2; n++) {
      console.log(pronoun[p] + adj[a] + noun[n] + ".com");
    }
  }
}
