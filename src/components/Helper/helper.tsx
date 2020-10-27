function calculatorTime(tmsecond:number):Array<number|string> {
  let hours :number=Math.floor(tmsecond/3600)
  let minutes:number=Math.floor((tmsecond-(hours*3600))/60)
  let seconds:number=tmsecond-(hours*3600)-(minutes*60)
  let hourFormat=hours<10?`0${hours}`:hours
  let minutesFormat=minutes<10?`0${minutes}`:minutes
  let secondFormat=seconds<10?`0${seconds}`:seconds
      return [
        hourFormat,
        minutesFormat,
        secondFormat
      ]
}
export default calculatorTime 