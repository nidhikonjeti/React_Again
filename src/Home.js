
import BlogList from './BlogList';
import useFetch from './useFetch';


const Home = () => {
     
    const {data:blogs,ispending,error}=useFetch('http://localhost:8000/blogs')
    
    

    

    
    return ( 
        <div className='home'>
            {error && <div>{error}</div>}
            {ispending && <div>loading..</div>}
            {blogs && <BlogList blogs={blogs} title="all blogs" />}
            


        
        </div>
     );
}
export default Home;



     //used to re-render the data.sometimes used to fetch data and for authentication
     //we use if because it takes time for react to load and initially the blog is set to null.so until the condition becomes true the output wont be displayed
     // when a state is changed the useeffect rerenders the data 
     //only runs once for empty dependency array
     //renders whenever there is change in the state of name
 
