import { Link } from 'react-router-dom'

export default function ReviewCard({review_id, owner, title, category}){
    return (
        <>
        <br /> 
        
        
        <section id="itemCard"> 
        <Link to={`/reviews/${review_id}`}>
            <h3>
                <strong>
                    <u>{owner}</u>
                </strong>
            </h3>
        <p>
            <strong>title:</strong> {title}
        </p>
        <p>
            <strong>Category:</strong>{category}
        </p>
        </Link>
        </section>
            
        </>
    );
}

