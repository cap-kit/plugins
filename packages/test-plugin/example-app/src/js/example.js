import { Test } from '@cap-kit/test-plugin';

window.testEcho = () => {
    const inputValue = document.getElementById('echoInput').value;
    Test.echo({ value: inputValue })
}

window.testPluginVersion = async () => {
    try {
        const { version } = await Test.getPluginVersion();
        console.log('Plugin Version:', version);
        alert('Plugin Version: ' + version);
    } catch (err) {
        console.error('Error getting plugin version:', err);
    }
}
