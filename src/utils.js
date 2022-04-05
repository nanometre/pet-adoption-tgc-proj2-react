// COLLECTION OF NON SPECIFIC MODULES

// function to open link in a new tab
export function openInNewTab(url){
    window.open(url);
}

// function to get average rating for an animal
export function getAverageRating(animalComments){
    function getRating(comment) {
        return comment.rating
    }
    
    function addRatings({totalRating, ratingCount}, rating) {
        return {
            totalRating: totalRating + rating,
            ratingCount: ratingCount + 1
        }
    }

    const initialValue = {totalRating: 0, ratingCount: 0}
    const ratingInfo = animalComments[0].comments
                            .map(getRating)
                            .reduce(addRatings, initialValue)
    const {totalRating, ratingCount} = ratingInfo
    return (totalRating / ratingCount)
}