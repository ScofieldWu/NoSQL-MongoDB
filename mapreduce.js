//7) Produce a new collection that contains each hashtag used in the collection of tweets, along with the number of times that hashtag was used.
function myMapper() {
    //The mapper function is called with each document, which has the special name 'this'
    //Emit a key-value pair:
    for (obj of this.entities.hashtags) {
        //Do something with obj, or obj.field, or whatever...
        emit(obj.text, 1);
    }
}

function myReducer(key, values) {
    //The reducer is called once for each key, and is passed an array
    //containing all values corresponding to that key.
    //Produce the desired result
    return Array.sum( values );
}

db.tweets.mapReduce(myMapper, myReducer, { query: {}, out: "mroutput" })
db.mroutput.aggregate({$sort: {value: -1}})