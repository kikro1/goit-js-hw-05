const getTotalBalanceByGender = (users, gender) => {
    return users
      .filter((user) => user.gender === gender)
      .reduce((totalBalance, user) => totalBalance + user.balance, 0);
  };
  
  const maleTotalBalance = getTotalBalanceByGender(allUsers, "male");
  console.log(maleTotalBalance); 
  
  const femaleTotalBalance = getTotalBalanceByGender(allUsers, "female");
  console.log(femaleTotalBalance);
  