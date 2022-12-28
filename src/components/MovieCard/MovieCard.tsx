import classes from './MovieCard.module.css';
import { Film } from '../../App'
import { useState } from 'react';

const MovieCard = (props: Film) => {
    const [isHovering, setIsHovering] = useState<boolean>(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const {
        is_new,
        imdb_rate,
        poster,
        title,
        country,
        year,
        num_seasons,
        min_age,
        genres,
        keyframe
    } = props;

    return (
        <div className={classes.moviecard}>
            <div 
                className={classes.moviecard__img}
                style={{ backgroundImage: `url(${isHovering ? keyframe : poster})`}}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {is_new && <div className={classes.moviecard__new}>New on NetUP TV</div>}
                <div className={classes.moviecard__rate}>IMDB {imdb_rate}</div>
            </div>
            <div className={classes.moviecard__description}>
                <div className={classes.moviecard__title}>
                    <p>{title}</p>
                </div>
                <div className={classes.moviecard__parameters}>
                    <p>{country} | {year} | {length} | {num_seasons} | {`${min_age}+`}</p>
                </div>
                <div className={classes.moviecard__tags}>
                    <p>{genres.join(', ')}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;