function basicTeenager(age) {
  if(age > 12 && age < 20)  {
    return "You are a teenager!"
  }
}

function teenager(age) {
  if(age > 12 && age < 20)  {
    return "You are a teenager!"
  } else {
    return "You are not a teenager"
  }
}

function ageChecker(age) {
  if(age > 12 && age < 20)  {
    return "You are a teenager!"
  }
  if(age > 19)  {
    return "You are a grownup"
  }
  if(age < 13)  {
    return "You are a kid"
  }
}

function ternaryTeenager(age) {
  return age > 12 && age < 20 ? "You are a teenager" : "You are not a teenager";
}

function switchAge(age) {
  return age > 12 && age < 20 ? "You are a teenager" : "You have an age";
}
