import style from "./DateTimeStyle.module.scss"
export default function DateTime({City}) {
  const userDate = new Date();

  const options = {
    month: 'numeric',
    day: 'numeric',
  };
  
  const userDateTime = userDate.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
  const userDateToday = userDate.toLocaleDateString(undefined,options)
  

  return (
    <>
      
      {City &&(
      <div className={style.date}>
        <div className={style.dateTime}>{userDateToday}</div>
        <div>{userDateTime}</div>
      </div>)}
    </>
  );
}
