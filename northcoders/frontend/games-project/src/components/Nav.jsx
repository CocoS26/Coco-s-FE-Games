import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import{ getCategories } from "../utils/api";

const Nav = () =>{
    const [categories, setCategories] = useState([]);
    
    useEffect(()=>{
        getCategories()
        .then(({categories})=>{
            setCategories(categories)
        })
    },[])


return <ul>
    {categories.map(category=>{

        return <Link to={`/reviews?category=${category.slug}`} className="Nav__link" key= {category.slug}>{category.slug}   
          |         </Link>
    })}
    <Link to='/reviews' className ="Nav__link">
        All
    </Link>

</ul>
}

export default Nav