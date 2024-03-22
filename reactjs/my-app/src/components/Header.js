
function Header(props) {
    
    const mytitle = props.apptitle;
    return (
        <div>
            <h2>{props.apptitle}</h2>
            <hr/>
        </div>
    )
}

export default Header;
