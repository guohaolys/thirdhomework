/**
 * Created by ChuckGao on 2017/4/28.
 */
function loadSoundFile(loadSoundFileCallBack) {
    var assetPath = "res/";
    var sounds = [
        {src:"bgm_sound.mp3", id:"bgm"},
        {src:"click_sound.wav", id:"click"},
        {src:"step_sound.wav", id:"step"},
        {src:"fail_sound.mp3", id:"fail"},
        {src:"victory_sound.mp3", id:"victory"}
    ];
    createjs.Sound.alternateExtensions = ["mp3"];    // if the passed extension is not supported, try this extension
    createjs.Sound.on("fileload", loadSoundFileCallBack); // call handleLoad when each sound loads
    createjs.Sound.registerSounds(sounds, assetPath);
}
function handleSoundLoad() {
    createjs.Sound.play("bgm");
}
function playSound(id) {
    createjs.Sound.play(id);
}