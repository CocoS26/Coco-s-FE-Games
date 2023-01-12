import { Link } from 'react-router-dom'
export default function ReviewCard({review_id, owner, title, category}){
    return (
        <>
        <br /> 
        <section id="itemCard"> 
        <Link to={`/reviews/${review_id}`}>
            <h3>
                <strong>
                    <u>{title}</u>
                </strong>
            </h3>  
        </Link>
        <p>
            <strong>Owner:</strong> {owner}
        </p>
        <p>
            <strong>Category:</strong>{category}
        </p>
      
        </section>
            
        </>
    );
}

