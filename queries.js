//1) Retrieve all tweets that are replying to the user with screen name “globeandmail”
db.tweets.find({ in_reply_to_screen_name: "globeandmail" }).pretty()

//2) Retrieve all tweets made by the user with screen name “MLHealthUnit”
db.tweets.find({ "user.screen_name": "MLHealthUnit" }).pretty()