
const Timer =()=> {
    let time = new Date();
    let end = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    console.log(end)
    return(
        <div>Time</div>
    )
}
export default Timer;