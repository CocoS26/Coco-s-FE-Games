export default function CommentCard({comment_id, body, review_id, votes,created_at}){
    return (
        <>
        <br /> 
        <section id="CommentCard"> 
            <h3>
                <strong>
                    <u>{body}</u>
                </strong>
            </h3>
        <p>
            <strong>votes:</strong> {votes}
        </p>
        <p>
            <strong>Created at:</strong>{created_at}
        </p>

        </section>  
        </>
    );
}