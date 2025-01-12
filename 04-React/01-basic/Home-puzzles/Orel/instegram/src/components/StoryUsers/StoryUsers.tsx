
import './StoryUsers.scss'

export interface StoryUsersPrompts {
    image: string;
    authorName: string;
}

const StoryUsers: React.FC<StoryUsersPrompts> = ({ image, authorName }) => {
    return (
        <div className="storyUser-container">
            <div className="circleUserStory-container">
                <img className="circleUserStory-container__image" src={image} />
                 </div>
            <h6 className="circleUserStory-container__user-name" >{authorName}</h6>
        </div>
    )
}


export default StoryUsers