/*
 * TweetDetailsConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_DETAILS = 'Gwitter/TweetDetailsPage/LOAD_DETAILS';
export const LOAD_DETAILS_SUCCESS = 'Gwitter/TweetDetailsPage/LOAD_DETAILS_SUCCESS';
export const LOAD_DETAILS_ERROR = 'Gwitter/TweetDetailsPage/LOAD_DETAILS_ERROR';
export const CHANGE_TWEET_ID = 'Gwitter/TweetDetailPage/CHANGE_TWEET_ID';