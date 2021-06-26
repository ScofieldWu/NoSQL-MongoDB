//3) Produce a list of users, together with the total number of times they tweeted, sorted in decreasing order.
db.tweets.aggregate( [
    { $group: { _id: "$user.name", total_tweets: { $sum: 1 } } },
    { $sort: { total_tweets: -1 } }
] )

//4) Produce a list of place names, together with the total number of tweets from that place name, sorted in decreasing order.
db.tweets.aggregate( [
    { $group: { _id: "$place.full_name", total_tweets: { $sum: 1 } } },
    { $sort: { total_tweets: -1 } }
] )

//5) Produce a list of users, together with the total number of replies to that user, sorted in decreasing order.
db.tweets.aggregate( [
    { $group: { _id: "$in_reply_to_screen_name", total_replies: { $sum: 1 } } },
    { $sort: { total_replies: -1 } }
] )

//6) Produce a list of users, together with the total number of hashtags used by that user, sorted in decreasing order.
db.tweets.aggregate( [
    { $unwind: "$entities.hashtags" },
    { $group: { _id: "$user.screen_name", total_hashtags: { $sum: 1 } } },
    { $sort: { total_hashtags: -1 } }
] )