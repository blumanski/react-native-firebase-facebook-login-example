## react-native-firebase-facebook-login-example
Example on how to implement react-native with firebase/firestack and facebook login

Used components

https://github.com/iodine/react-native-drawer-layout

https://github.com/fullstackreact/react-native-firestack

https://github.com/magus/react-native-facebook-login

One could clone this repo and get it running by changing the service files.

But this is an example on how to implement this.
If one runs into trouble implementing one of the components, this is may helpfull. 
This app is working on ios and android.

To set up Xcode and Android dependencies is rather painful.
One is jumping from one error to another, the more interesting files in this repo are the files in the ios and android directories, the cocoa pod file and the gradle.build files.

I got this running on the day of the Android Studio update to 2.2
Good luck and keep it up

## Notes to myself for IOS
1. Bolts error -> GoogleService.plist, drag it into xcode | make sure pod 'Bolts' is in pod file
2. Firebase pod files -> use pod 'Firebase/Auth' pod 'Firebase/Database' pod 'Firebase/Core' instead of just pod 'Firebase'
3. Enable Sharing Keychain in Capabilities in Xcode (Target -> Capabilities -> Keychain Groups to On)


Clear pod 
  pod deintegrate
  pod repo remove master
  pod setup
  pod install
