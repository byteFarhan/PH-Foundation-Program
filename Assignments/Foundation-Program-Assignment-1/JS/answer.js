// Foundation - Program - Assignment - 1

//Question No. 1
const describeValue = (value) => {
  return `"${typeof value} | ${!!value ? "truthy" : "falsy"}"`;
};

//Question No. 2
const getDayType = (day) => {
  let result;
  switch (day.toLowerCase()) {
    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      result = "Working Day";
      break;
    case "friday":
    case "saturday":
      result = "Weekend";
      break;
    default:
      result = "Invalid Day";
  }
  return result;
};

//Question No. 3
const validateUsername = (userName) => {
  const usernameLowerCase = userName.toLowerCase();
  if (usernameLowerCase.length < 4) {
    return "Too Short";
  } else if (usernameLowerCase.includes(" ")) {
    return "No Space Allowed";
  } else if (usernameLowerCase.includes("admin")) {
    return "Reserved Word";
  }
  return "Available";
};

//Question No. 4
const getCngFare = (distance, isNight, waitingMinutes) => {
  let fare = 50;
  const minFareKM = 2;
  const extraKMFare = 15;
  const waitingChargePerMin = 2;
  if (distance > 2) {
    fare += extraKMFare * (distance - minFareKM);
  }
  if (waitingMinutes) {
    fare += waitingMinutes * waitingChargePerMin;
  }
  if (isNight) {
    fare += fare * 0.2;
  }
  return fare;
};

//Question No. 5
const getChaseVerdict = (target, scored, ballsLeft) => {
  let chaseVerdict;
  const runsNeeded = target - scored;
  const requiredRate = (runsNeeded / ballsLeft) * 6;
  if (runsNeeded <= 0) {
    chaseVerdict = "Won";
  } else if (ballsLeft <= 0) {
    chaseVerdict = "Lost";
  } else if (requiredRate) {
    let winProbability =
      requiredRate <= 6
        ? "Comfortable"
        : requiredRate > 6 && requiredRate <= 12
          ? "Tough"
          : requiredRate > 12 && "Almost Impossible";

    chaseVerdict = `Need ${runsNeeded} runs in ${ballsLeft} balls | ${winProbability}`;
  }

  return chaseVerdict;
};
