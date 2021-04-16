import SpeechToText from 'react-native-google-speech-to-text';
const speechToTextHandler = async () => {
 
    let speechToTextData = null;
        try {
            speechToTextData = await SpeechToText.startSpeech('Try saying something', 'en_IN');
            console.log('speechToTextData: ', speechToTextData);
 
        } catch (error) {
            console.log('error: ', error);
        }
}