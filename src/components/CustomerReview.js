import img1 from '../assets/Ellipse 175.png'
import img2 from '../assets/Ellipse 175 (1).png'
import img3 from '../assets/Ellipse 175 (2).png'
import classes from './CustomerReview.module.css'
const CustomerReview = () =>{
    const data = [
        {
            id:1,
            img:img1,
            name:'Viezh Robert',
            city:'Warsaw, Poland',
            rating:4.5,
            msg:'Wow... I am very happy to use this VPN, it turned out to be more than my expections and so far there have been no problems. LaslesVPN always the best'
        },
        {
            id:2,
            img:img2,
            name:'Yassica Christy',
            city:'Shanxi, China',
            rating:4.5,
            msg:'I like it because I like to tavel far and still can connect with high speed',
        },
        {
            id:3,
            img:img3,
            name:'Kim Young Jou',
            city:'Seoul, South Korea',
            rating:4.5,
            msg:'This is very unusual for my business that currently requires a virtual private network that has high security'  
        }
    ]
    return (
        <div className={classes.main}>
            <h2 style={{'textAlign':'center','fontSize':'xx-large'}}>Trusted by Thousands of<br/> Happy Customer</h2>
            <p style={{'textAlign':'center'}}>These are the stories of our customer who have joined us with great<br/> pleasure when using this crazy feature.</p>
            <div className={classes.flexContainer}>
                {data.map(item=>(
                    <div key={item.id} className={classes.card}>
                    <div className={classes.flexContainer}>
                        <div className={classes.item1}><img src={item.img} alt='img1' width={24}/></div>
                        <div className={classes.item2}>
                            <h4>{item.name}</h4>
                            <small>{item.city}</small>
                        </div>
                        <div className={classes.item3}>4.5 <span style={{'color':'orange'}}>&#9733;</span></div>
                    </div>
                        <p>{item.msg}</p>
                </div>
                ))}
            </div>
            <div className={classes.flexContainer}>
                <div className={classes.pagination}>
                    {/* <span></span>
                    <div><span className={classes.circle}>&#9675;</span></div>
                    <div><span className={classes.circle}>&#9675;</span></div>
                    <div><span className={classes.circle}>&#9675;</span></div> */}
                </div>
                <div>
                    <span className={classes.right}>&#8592;</span>
                    <span className={classes.left}>&#8594;</span>
                </div>
            </div>
        </div>
    )
}

export default CustomerReview;