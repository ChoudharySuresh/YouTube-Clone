import Comment from "./Comment"

const commentsData = [
    {
        name:"Suresh Choudhary",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nisi explicabo facere consectetur a modi expedita quae maiores totam cumque.",
        replies:[],
        
    },

    {
        name:"Suresh Choudhary",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nisi explicabo facere consectetur a modi expedita quae maiores totam cumque.",
        replies:[],
        
    },

    {
        name:"Suresh Choudhary",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nisi explicabo facere consectetur a modi expedita quae maiores totam cumque.",
        replies:[
            {
                name:"Suresh Choudhary",
                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nisi explicabo facere consectetur a modi expedita quae maiores totam cumque.",
                replies:[
                    {
                        name:"Suresh Choudhary",
                        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nisi explicabo facere consectetur a modi expedita quae maiores totam cumque.",
                        replies:[],
                        
                    },
                    {
                        name:"Suresh Choudhary",
                        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nisi explicabo facere consectetur a modi expedita quae maiores totam cumque.",
                        replies:[],
                        
                    },
                    {
                        name:"Suresh Choudhary",
                        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nisi explicabo facere consectetur a modi expedita quae maiores totam cumque.",
                        replies:[],
                        
                    },{
                        name:"Suresh Choudhary",
                        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nisi explicabo facere consectetur a modi expedita quae maiores totam cumque.",
                        replies:[
                            {
                                name:"Suresh Choudhary",
                                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nisi explicabo facere consectetur a modi expedita quae maiores totam cumque.",
                                replies:[
                                    {
                                        name:"Suresh Choudhary",
                                        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nisi explicabo facere consectetur a modi expedita quae maiores totam cumque.",
                                        replies:[],
                                        
                                    }
                                ],
                                
                            },
                        ],
                        
                    }
                ],
                
            },
            {
                name:"Suresh Choudhary",
                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nisi explicabo facere consectetur a modi expedita quae maiores totam cumque.",
                replies:[],
                
            },
            {
                name:"Suresh Choudhary",
                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nisi explicabo facere consectetur a modi expedita quae maiores totam cumque.",
                replies:[],
                
            }
        ],
        
    },

    {
        name:"Suresh Choudhary",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nisi explicabo facere consectetur a modi expedita quae maiores totam cumque.",
        replies:[],
        
    }
]


const CommentList = ({comments}) => {
    return comments.map((comment , index)=> (
        <div className="my-4" key={index}>
            <Comment data={comment}/>

            <div className="pl-4 border-l border-black">
                <CommentList comments={comment.replies}/>
            </div>
        </div>
    ))
}

const CommentsContainer = () => {
    return (
        <>
            <div className="my-4">
                <h1 className="font-bold text-2xl">Comments</h1>
                <CommentList comments={commentsData}/>
            </div>
        </>
    )
}

export default CommentsContainer;