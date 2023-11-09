import style from "./DateTimeStyle.module.scss"
export default function DateTime({City}) {
  const userDate = new Date();

  const options = {
    month: 'numeric',
    day: 'numeric',
  };
  
  const userDateTime = userDate.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
  const userDateToday = userDate.toLocaleDateString(undefined,options)
  const userLog = userDateToday.charAt(2).toUpperCase() + userDateToday.slice(1)
  
console.log(userLog);
  return (
    <div>
      
      {City &&(
      <div className={style.date}>
        <div className={style.dateTime}>{userDateToday}</div>
        <div>{userDateTime}</div>
      </div>)}
    </div>
  );
}
