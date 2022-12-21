# Business Login for Instagram - Not working on mobile

This project is reproducing the issue from [this Facebook bug](https://developers.facebook.com/support/bugs/1215487542707262/).

## Steps to reproduce

1. Click this link in a mobile browser:
   https://www.facebook.com/v15.0/dialog/oauth?client_id=875708503068512&display=page&extras=%7B%22setup%22%3A%7B%22channel%22%3A%22IG_API_ONBOARDING%22%7D%7D&redirect_uri=https%3A%2F%2Fasset-management-api.bn.co%2Fstatus&response_type=token&scope=instagram_basic%2Cpages_show_list%2Cpages_read_engagement

## Same thing with extra steps

1. `npm install`
2. `node index.js`
3. Go to the hosted page in a mobile browser (iOS or Android) and click the Login link.
