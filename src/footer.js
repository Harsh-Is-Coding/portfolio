function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return(
        <div>
            <h3>Designed and Developed by Harsh Shukla</h3>
            <h3>Copyright © {year} SB</h3>
        </div>
    )
}

export default Footer