## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
```

Second, to run the Web application:

```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Third, to run the Mobile application:

You have to edit App entry point in `node_modules/expo/AppEntry.js`:
```bash
from:
import App from '../../App';
to:
import App from '../../app/App';
```
I haven't searched for permanent solution to this issue. It has to be edited
every time you preinstall node_modules.

Set `LOCAL_API` constant in `/app/constants/localApiUrl.js` with your machine Ip.

To get the Ip on Linux:
```bash
ifconfig | grep inet
```
On Windows:
```bash
ipconfig /renew Wi-Fi
```
The value is `IPv4 Address` under `Wireless LAN adapter Wi-Fi:` section.

Then run:
```bash
npm run app
```

To see the application on your mobile phone install Expo and refer the documentation:

https://docs.expo.io/get-started/installation/#2-expo-go-app-for-ios-and
