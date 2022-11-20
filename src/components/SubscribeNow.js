import classes from './SubscribeNow.module.css'
const SubscribeNow = () =>{
    return (
        <div className={classes.main}>
            <div className={classes.part1}>
            <h1>Subscribe Now for</h1>
            <h1>Get Special Features!</h1>
            <p>Let's subscribe with us and find the fun.</p>
            </div>
            <div className={classes.part2}>
                <button>Subscribe Now</button>
            </div>
        </div>
    )
}

export default SubscribeNow;