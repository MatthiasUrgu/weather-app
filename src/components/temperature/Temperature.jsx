function Temperature({ Celcius }) {
  return (
    <>
      { Celcius &&  <span>{Celcius} <span>C°</span></span> }
    </>
  )
}

export default Temperature