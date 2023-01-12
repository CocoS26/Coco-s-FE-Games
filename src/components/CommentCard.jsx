export default function CommentCard({comment_id, body, review_id, votes,created_at,author}){
    return (
        <>
        <br /> 
        <section id="CommentCard"> 
        <h3>
        <p><strong><u>{author}</u></strong></p>
        </h3>
            <p><strong>Body:</strong>{body}</p>
        <p>
            <strong>Votes:</strong> {votes}
        </p>
        <p>
            <strong>Created at:</strong>{created_at}
        </p>

        </section>  
        </>
    );
}