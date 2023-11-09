import './style.css'
const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()
    return (
        <footer className="footer">
            &copy;{year} All rights reserved
        </footer>
    )
}

export default Footer
