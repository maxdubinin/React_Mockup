

const Social = ({link}) => {

    const itemLink = link.map((item) => <a href={item.path} className={item.class} key={item.class}></a>)
    return (
        <div className="social__items">{itemLink}</div>
    )
}

export default Social;