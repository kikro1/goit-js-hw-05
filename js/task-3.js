const profile = {
  username: "Jacob",
  playTime: 300,
  changeUsername(newName) {
    this.username = newName;
  },
  updatePlayTime(hours) {
    this.playTime += hours;
  },
  getInfo() {
    return `${this.username} ${this.playTime} active hours!`;
  },
};

// Перевірка коду
console.log(profile.getInfo()); // "Jacob 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco 320 active hours!"
