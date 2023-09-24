const  Navbar= () => {
    return (
        <nav className="navbar">
            <h1>the dojo blog </h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                color:"white",
                backgroundColor:"black",
                borderRadius:'8px',
                }}>new blog</a>
            </div>
        </nav>
      );
}
 
export default Navbar;