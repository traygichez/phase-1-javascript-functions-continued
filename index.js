function saturdayFun(action =`roller-skate`){
return(`This Saturday, I want to ${action}!`)
}
const mondayWork = function (activity="go to the office"){
    return(`This Monday, I will ${activity}.`)
}
function wrapAdjective(parameter1="*"){
    return function( parameter="special"){
        return (`You are ${parameter1}${parameter}${parameter1}!`)
    }
}
