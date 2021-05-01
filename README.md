# Share Code Between React Native and React JS

## Sample application that contains skeleton for creating React Native/React JS application with `container pattern`

I have created `Container components` that are shared between Mobile and 
Web applications. Web application with specific components for web is created. 
React Native components should be implemented and a Mobile application. 

Application counts button clicks and save the count in db. Click count is displayed 
and refreshed after every click.

Important think is to sync both applications. When the button is clicked in 
mobile we should update the count in web app too.

To test it run Flask and React applications.