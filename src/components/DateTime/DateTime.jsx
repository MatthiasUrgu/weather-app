export default function DateTime({City}) {
  const userDate = new Date();

  const userDay = userDate.getUTCDate();
  const userMonth = userDate.getUTCMonth();
  const userYears = userDate.getUTCFullYear();
  const userHours = userDate.getUTCHours();
  const userMinutes = userDate.getUTCMinutes();

  const userTime = userDate.toLocaleDateString()

  return (
    <>
      
      {City &&(<div>
        <span>{userTime}</span>
        <div>{userDay}</div>
        <div>{userMonth}</div>
        <div>{userYears}</div>
        <div>{userHours} :{userMinutes}</div>
      </div>)}
    </>
  );
}
