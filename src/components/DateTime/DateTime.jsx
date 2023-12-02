import style from "./DateTimeStyle.module.scss"
export default function DateTime({City,TimeZone}) {
  
  const user = TimeZone
  const split = user.split(' ')
  const userHour =split[1]
  const userDate = split[0]


    
  return (
    <>
      
      {City &&(
      <div className={style.date}>
        <div className={style.dateTime}>
          {userDate}
        </div>
        
        <div>{userHour}</div>
      </div>)}
    </>
  );
}
