// Tests 1-3
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

// Tests 4-6
const mondayWork = function (activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
  }

  mondayWork ()


// Test 7-9


function wrapAdjective (visualFlair="*"){
    return function(parameter="special"){
      return `You are ${visualFlair+parameter+visualFlair}!`
    }
  }
/*

*/